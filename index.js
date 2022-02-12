cookiecount = 0;
cookie_multiplier = 1;



function goBack(){
    window.location.replace("index.html");
    save();
}
function goToSecret(secretnumber){
    window.location.replace("secret" + secretnumber + ".html");
    save();
}
function goToShop(){
    save();
    window.location.replace("shop.html");
}

function add(){
    cookiecount = cookiecount + cookie_multiplier;
    document.getElementById("cookieValue").value = cookiecount;
}

function save() {
    localStorage.setItem("cookiecount", cookiecount);
}

function load(){
    cookiecount = localStorage.getItem("cookiecount");
    cookiecount = parseInt(cookiecount);
    document.getElementById("cookieValue").value = cookiecount;
}

function buyDoubleCookies(){
    if(cookiecount > 500){
        cookie_multiplier = 2;
    }
    else{
        window.alert("Whoops! You don't have enough cookies at the time go get some and come back later!")
    }
}
window.onload = function(){
        load()
}
window.onbeforeunload = function(){
    save();
    alert("Are you sure you don't want more delicious cookies");
}