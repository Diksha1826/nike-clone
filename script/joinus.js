 document.querySelector("#joinusmainform").addEventListener("submit" , joinusformsubmit);


 function joinusformsubmit(e){
   e.preventDefault();
   var array = JSON.parse(localStorage.getItem("signupdetails")) || [];
   var email = document.querySelector("#joinusemail").value;
   var password = document.querySelector("#joinuspassword").value;
   var name = document.querySelector("#joinusfirstname").value;
   var country = document.querySelector("#country").value;
   
   var obj = {
     Email: email ,
     Password: password ,
     Name: name,
     Country: country
   }
//    var flag = false ;
//    for(var i=0 ; i<array.length ;i++){
//       if(email === array[i].Email){
//         flag = true;
//         return;
//       }
//    }
//    if(flag === false){

var joinemailarr = JSON.parse(localStorage.getItem("joinusemail"));
if(email === joinemailarr[0]){
    array.push(obj);
    localStorage.setItem("signupdetails" , JSON.stringify(array));
    window.location.href="index.html";
}
else{
    alert("enter correct email");
} 
}

