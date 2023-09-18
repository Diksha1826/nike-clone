var kidsdata = JSON.parse(localStorage.getItem("nikekidsdata"));

kidsdata.map(function(elem , index , array){
    var div = document.createElement("div");
    div.setAttribute("class" , "inndiv")

    var image = document.createElement("img");
    image.setAttribute("src" , elem.image[0]);
    image.setAttribute("class" , "nikeimg");

    var name = document.createElement("p");
    name.innerText = elem.product_name ;

    var description = document.createElement("p");
    description.innerText = elem.product_details ;

    var price = document.createElement("p");
    price.innerText = elem.price ;

    div.append(image , name , description , price);


    document.querySelector("#nikecontainer").append(div);


})
