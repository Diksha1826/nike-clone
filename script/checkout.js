var totl = JSON.parse(localStorage.getItem("totalbill"));
document.querySelector("#checkouttotal").innerHTML = "Total : " + totl  ;

var data = JSON.parse(localStorage.getItem("mencartarr"));
data.map(function(elem){
    console.log("hi");
    var img = document.createElement("img");
    img.setAttribute("src" , elem.image[0]);
    img.setAttribute("class" ,  "checkoutshoeimg")

    var prdtname = document.createElement("p");
    prdtname.innerText = elem.product_name;

    var shoedetail = document.createElement("p");
    shoedetail.innerText = elem.product_details;

    var quantity = document.createElement("p");
    quantity.innerText = "Qty" + " " + elem.qty ;
    quantity.style.color = "grey";

    var size = document.createElement("p");
    size.innerText = elem.size ;
    size.style.color = "grey";


    var price = document.createElement("p");
    price.innerText = "₹ "  + " " + elem.price;
    price.style.color = "grey";


    var shoedetaildiv = document.createElement("div");
    shoedetaildiv.append(prdtname , shoedetail , quantity , size , price);

    var shoediv = document.createElement("div");
    shoediv.append(img , shoedetaildiv);
    shoediv.setAttribute("class" , "checkoutshoediv")

    document.querySelector("#checkoutshoes").append(shoediv);



})

document.querySelector("#checkoutform").addEventListener("submit" , gotoplacedorder);

function gotoplacedorder(e){
    e.preventDefault();
    var name = document.querySelector("#personname").value;
    localStorage.setItem("orderplacedname" , JSON.stringify(name));
    window.location.href = "placedorder.html"

}