        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/www.mercadopago.com.mx\/api\/alias", true);
        xhr.setRequestHeader("accept", "application\/json, text\/plain, *\/*");
        xhr.setRequestHeader("accept-language", "en-US,en;q=0.5");
        xhr.setRequestHeader("content-type", "application\/json;charset=utf-8");
        xhr.withCredentials = true;
        var body = "{\"alias\":\"moblig\"}";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
      
