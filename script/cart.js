var data = JSON.parse(localStorage.getItem("mencartarr"));

result(data);
totalcal();

function result(data){
    document.querySelector("#cartcontainer").innerHTML = ""
data.map(function(elem , index , array){
    var div = document.createElement("div");
    div.setAttribute("class" , "cartinndiv");

    var cartshoedetails = document.createElement("div");
    cartshoedetails.setAttribute("class" , "cartshoedetail");

    var image = document.createElement("img");
    image.setAttribute("src" , elem.image[0]);
    image.setAttribute("class" , "nikeimg");

    var name = document.createElement("p");
    name.innerText = elem.product_name ;

    var description = document.createElement("p");
    description.innerText = elem.product_details ;

    var qtyndsize = document.createElement("div");
    qtyndsize.style.display = "flex";
    qtyndsize.style.alignItems = "center";

    var qtydiv = document.createElement("div");
    qtydiv.style.display= "flex";
    qtydiv.style.alignItems = "center";

    var sizename = document.createElement("p");
    sizename.innerText = "Size ";
    sizename.style.marginRight = "5px"

    var size = document.createElement("p");
    size.innerText = elem.size;

    var sizediv = document.createElement("div");
    sizediv.style.display = "flex";
    sizediv.style.marginRight = "30px";

    var quantityname = document.createElement("p");
    quantityname.innerText = "Quantity"; 

    var quantity = document.createElement("select");
    quantity.style.border = "none";
    var option1 = document.createElement("option");
    option1.innerText = elem.qty;
    var option101 = document.createElement("option");
    option101.innerText = 1;
    var option2 = document.createElement("option");
    option2.innerText = 2;
    var option3 = document.createElement("option");
    option3.innerText = 3;
    var option4 = document.createElement("option");
    option4.innerText = 4;
    var option5 = document.createElement("option");
    option5.innerText = 5;
    var option6 = document.createElement("option");
    option6.innerText = 6;
    var option7 = document.createElement("option");
    option7.innerText = 7;
    var option8 = document.createElement("option");
    option8.innerText = 8;
    var option9 = document.createElement("option");
    option9.innerText = 9;
    var option10 = document.createElement("option");
    option10.innerText = 10;

    quantity.addEventListener("change" , function(){
        // console.log(quantity.value);
        quantitychange(quantity , elem);
    })

    quantity.append(option1 ,option101, option2 , option3 , option4 , option5 , option6 , option7 , option8 , option9 , option10)

    qtydiv.append(quantityname , quantity);
    sizediv.append(sizename , size);

    qtyndsize.append(sizediv , qtydiv);

    var price = document.createElement("p");
    price.setAttribute("class" , "cartshoeprice")
    price.innerText = "MRP: ₹ " + elem.price ;

    var pricetopdiv = document.createElement("div");
    pricetopdiv.setAttribute("class" , "pricetopdivcart");

    pricetopdiv.append( name , price);

    var remove = document.createElement("button");
    remove.innerText = "Remove Item";
    remove.style.width = "25%";
    remove.style.backgroundColor = "black";
    remove.style.color = "white";
    remove.style.borderRadius = "30px";


    remove.addEventListener("click" , function(){
        removeitem(elem);
    })

    cartshoedetails.append(pricetopdiv ,description, qtyndsize , remove);

    div.append(image , cartshoedetails);

    document.querySelector("#cartcontainer").append(div);


});
};

function totalcal(){
    document.querySelector("#total").innerText = "";
var total = document.createElement("h2");
var res = data.reduce(function(acc, elem){
    return acc + (elem.qty * elem.price);
},0);
total.innerText = "Total " +   " ₹" + res;
document.querySelector("#total").append(total);
localStorage.setItem("totalbill" , res);
}
function quantitychange(quantity , elem){
    elem.qty = quantity.value;
    localStorage.setItem("mencartarr" , JSON.stringify(data));
    result(data);
    totalcal();
}

document.querySelector("#cartcheckoutbutton").addEventListener("click" , function(){
    gotocheckout();
})

function gotocheckout(){
    window.location.href= "checkout.html";
}

function removeitem(elem){
    for(var i=0 ; i<data.length ; i++){
        if(data[i].id == elem.id){
            data.splice(i , 1);
        }
    }
    localStorage.setItem("mencartarr" , JSON.stringify(data));
    result(data);
    totalcal()
}

