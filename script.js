
var counter = document.querySelector("#clicksCounter");

var btn = document.querySelector("#btn-click");
btn.addEventListener("click", function(){
    var clicks = parseInt(counter.textContent) + 1;
    counter.textContent = clicks;

});

var reset = document.querySelector("#btn-reset");
reset.addEventListener("click", function(){
    counter.textContent = "0";
});

function getCookieVal (offset){
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
        endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name){
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen){
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0)
        break;
    }
    return null;
}
function SetCookie (name, value){
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (2 < argc) ? argv[2] : null;
    var path = (3 < argc) ? argv[3] : null;
    var domain = (4 < argc) ? argv[4] : null;
    var secure = (5 < argc) ? argv[5] : false;
    document.cookie = name + "=" + escape (value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
}
function DisplayInfo(){
    var expdate = new Date();
    var visit;
    expdate.setTime(expdate.getTime()+(24 * 60 * 60 * 1000 * 365));
    if(!(visit = GetCookie("visit")))
    visit = 0;
    visit ++ ;
    SetCookie("visit", visit, expdate, "/", null, false);
    document.write("<div class="container"><h5>Esta é a sua "+ visit + "ª visita</h5></div>"); }

document.onload=DisplayInfo();

