fetch("https://www.mercadolibre.com.mx/profile/api/user/update", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/json;charset=utf-8",
        "x-csrf-token": "ZRC41Wo4-aaswdlWx1b1qYNj5YHMjuXLdGUQ",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
        
    },
    "referrer": "https://www.mercadolibre.com.mx/profile?view=profile&source=rules",
    "method": "PUT",
    "body": "{\"newData\":{\"phone\":{\"area_code\":\"222\",\"extension\":\"\",\"number\":\"9999999\"}},\"isBU\":false,\"isCO\":true,\"isProgressive\":false}",
    "mode": "cors"
});
