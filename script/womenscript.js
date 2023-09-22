var womensdata = JSON.parse(localStorage.getItem("nikewomensdata"));

womensdata.map(function(elem , index , array){
    var div = document.createElement("div");
    div.setAttribute("class" , "inndiv");

    var image = document.createElement("img");
    image.setAttribute("src" , elem.image[0]);
    image.setAttribute("class" , "nikeimg");

    var name = document.createElement("p");
    name.innerText = elem.product_name ;

    var description = document.createElement("p");
    description.innerText = elem.product_details ;

    var price = document.createElement("p");
    price.innerText = "₹" + elem.price ;

    var button = document.createElement("button");
    button.innerText= "add to cart";
    button.addEventListener("click" , function(){
        Gotocart(elem , index);
    })

    div.append(image , name , description , price , button);


    document.querySelector("#nikecontainer").append(div );


})

function Gotocart(elem , index){
    elem.qty = 1;
    var cartarr = JSON.parse(localStorage.getItem("mencartarr")) || [];
     
    var flag = true;
    for(var i=0;i<cartarr.length;i++){
        if(elem.id === cartarr[i].id){
            flag = false;
        }
    }
    if(flag === true){
        cartarr.push(elem);
    }

    localStorage.setItem("mencartarr" , JSON.stringify(cartarr) );

}