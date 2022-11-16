self.addEventListener("push", (e) => {
	// A couple of basic sanity checks
	if (!e.data) {
		console.log("Invalid notification data");
		return; // Invalid notification data
	}

	const pingData = e.data.json();
	const { id } = pingData;

	// We don't send the notification data in the push, otherwise we run into issues whereby
	// a user could have logged out but will still receive notification unintentionally.
	// Instead, we'll receive an ID in the push, then we'll ping the server to get
	// the actual content (and run our usual authorization checks)

	const promiseChain = fetch(`${BASE_URL}index.php?app=core&module=system&controller=notifications&do=fetchNotification&id=${id}`, {
		method: "POST",
		credentials: "include", // Must send cookies so we can check auth
	})
		.then((response) => {
			// Fetch went wrong - but we must show a notification, so just send a generic message
			if (!response.ok) {
				throw new Error("Invalid response");
			}

			return response.json();
		})
		.then((data) => {
			// The server returned an error - but we must show a notification, so just send a generic message
			if (data.error) {
				throw new Error("Server error");
			}

			const { body, url, grouped, groupedTitle, groupedUrl, icon, image } = data;
			let { title } = data;
			let tag;

			if (data.tag) {
				tag = data.tag.substr(0, 30);
			}

			let options = {
				body,
				icon: icon ? icon : NOTIFICATION_ICON,
				image: image ? image : null,
				data: {
					url,
				},
			};

			if (!tag || !grouped) {
				// This notification has no tag or grouped lang, so just send it
				// as a one-off thing
				return self.registration.showNotification(title, options);
			} else {
				return self.registration.getNotifications({ tag }).then((notifications) => {
					// Tagged notifications require some additional data
					options = {
						...options,
						tag,
						renotify: true, // Required, otherwise browsers won't renotify for this tag
						data: {
							...options.data,
							unseenCount: 1,
						},
					};

					if (notifications.length) {
						try {
							// Get the most recent notification and see if it has a count
							// If it does, increase the unseenCount by one and update the message
							// With this approach we'll always have a reference to the previous notification's count
							// and can simply increase and fire a new notification to tell the user
							const lastWithTag = notifications[notifications.length - 1];

							if (lastWithTag.data && typeof lastWithTag.data.unseenCount !== "undefined") {
								const unseenCount = lastWithTag.data.unseenCount + 1;

								options.data.unseenCount = unseenCount;
								options.body = pluralize(grouped.replace("{count}", unseenCount), unseenCount);

								if (groupedUrl) {
									options.data.url = groupedUrl ? groupedUrl : options.data.url;
								}

								if (groupedTitle) {
									title = pluralize(groupedTitle.replace("{count}", unseenCount), unseenCount);
								}

								lastWithTag.close();
							}
						} catch (err) {
							console.log(err);
						}
					}

					return self.registration.showNotification(title, options);
				});
			}
		})
		.catch((err) => {
			// The server returned an error - but we must show a notification, so just send a generic message
			return returnDefaultNotification();
		});

	e.waitUntil(promiseChain);
});
