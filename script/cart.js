var data = JSON.parse(localStorage.getItem("mencartarr"));

result(data)
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

    // var quantity = document.createElement("p");
    // quantity.innerText = "qty-" + elem.qty;

    var quantity = document.createElement("select");
    var option1 = document.createElement("option");
    option1.innerText =    elem.qty;
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
        quantitychange(quantity , elem)
    })

    quantity.append(option1 , option2 , option3 , option4 , option5 , option6 , option7 , option8 , option9 , option10)



    // var incqty = document.createElement("button");
    // incqty.innerText = "Qty++";
    // incqty.addEventListener("click" , function(){
    //     increaseqty(elem);

    // })

    // var decqty = document.createElement("button");
    // decqty.innerText = "Qty--";
    // decqty.addEventListener("click" , function(){
    //     decreaseqty(elem);

    // })

    var price = document.createElement("p");
    price.setAttribute("class" , "cartshoeprice")
    price.innerText = "MRP: ₹ " + elem.price ;

    var pricetopdiv = document.createElement("div");
    pricetopdiv.setAttribute("class" , "pricetopdivcart");


    pricetopdiv.append( name , price);


    cartshoedetails.append(pricetopdiv ,description, quantity );

    div.append(image , cartshoedetails);


    document.querySelector("#cartcontainer").append(div);


});
};


// function increaseqty(elem){
//      elem.qty++;
//      result(data);
//      totalcal();
// }

// function decreaseqty(elem){
//     elem.qty--;
//     if(elem.qty<=0){
//         elem.qty++;
//         alert("invalid qty");
//         return;
//     }
//     result(data);
//     totalcal();
// }




function totalcal(){
    document.querySelector("#total").innerText = "";
var total = document.createElement("h2");
var res = data.reduce(function(acc, elem){
    return acc + (elem.qty * elem.price);
},0);
total.innerText = "Total " +   " ₹" + res;
document.querySelector("#total").append(total);
}
function quantitychange(quantity , elem){
    elem.qty = quantity.value;
    totalcal();
}