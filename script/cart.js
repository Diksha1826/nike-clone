var data = JSON.parse(localStorage.getItem("mencartarr"));


data.map(function(elem , index , array){
    var div = document.createElement("div");
    div.setAttribute("class" , "inndiv");

    var image = document.createElement("img");
    image.setAttribute("src" , elem.image[0]);
    image.setAttribute("class" , "nikeimg");

    var name = document.createElement("p");
    name.innerText = elem.product_name ;

    var description = document.createElement("p");
    description.innerText = elem.product_details ;

    var quantity = document.createElement("p");
    quantity.innerText = "qty-" + elem.qty;

    var price = document.createElement("p");
    price.innerText = "₹" + elem.price ;

    div.append(image , name , description , quantity , price);


    document.querySelector("#cartcontainer").append(div );


})

function totalcal(){
    document.querySelector("#total").innerText = "";
var total = document.createElement("h2");
var res = data.reduce(function(acc, elem){
    return acc + (elem.qty * elem.price);
},0);
total.innerText = "Total price - ₹ " + res;
document.querySelector("#total").append(total);
}
totalcal();