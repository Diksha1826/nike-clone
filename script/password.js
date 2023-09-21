var localarr = JSON.parse(localStorage.getItem("signinemail"));
document.querySelector("#emailfromlocal").innerText = localarr[0].Email ;

function passwordlog(){
    var password = document.querySelector("#signinpassword").value;
    var localarr = JSON.parse(localStorage.getItem("signinemail"));
    if((localarr[0].Password) === password){
        window.location.href="index.html";
    }
}