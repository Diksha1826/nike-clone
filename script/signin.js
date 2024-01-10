function signin() {
  var signemail = document.querySelector("#signinemail").value;
  var array = JSON.parse(localStorage.getItem("signupdetails")) || [];
  var arr = [];
  var arr2 = [];
  // localStorage.setItem("signinemail" , JSON.stringify(arr))
  // localStorage.setItem("joinusemail" , JSON.stringify(arr2));

  // window.location.href = "joinus.html";
  for (var i = 0; i < array.length; i++) {
    if (signemail === array[i].Email) {
      arr.push(array[i]);
      localStorage.setItem("signinemail", JSON.stringify(arr));
      window.location.href = "password.html";
      return;
    } else {
      arr2.push(signemail);
      localStorage.setItem("joinusemail", JSON.stringify(arr2));
      window.location.href = "joinus.html";
    }
  }
}
