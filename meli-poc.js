fetch("https://www.mercadolibre.com.mx/profile/api/user/update", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/json;charset=utf-8",
        "x-csrf-token": "wzHBqQtu-E8m4H0geNPCvnP1tiyUtmtPBo9w",
        "X-XSRF-TOKEN": "PGXjndE3-aU6wD3lQ6G_H_tE_mey12gatFt0",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
        
    },
    "referrer": "https://www.mercadolibre.com.mx/profile?view=profile&source=rules",
    "method": "PUT",
    "body": "{\"newData\":{\"alternative_phone\":{\"area_code\":\"222\",\"extension\":\"\",\"number\":\"1439999\"}},\"isBU\":false,\"isCO\":true,\"isProgressive\":false}",
    "mode": "cors"
});
