var womensdata = JSON.parse(localStorage.getItem("nikewomensdata"));

womensdata.map(function(elem , index , array){
    var div = document.createElement("div");
    div.setAttribute("class" , "inndiv");

    var image = document.createElement("img");
    image.setAttribute("src" , elem.image[0]);

    var name = document.createElement("p");
    name.innerText = elem.product_name ;

    var description = document.createElement("p");
    description.innerText = elem.product_details ;

    var price = document.createElement("p");
    price.innerText = elem.price ;

    div.append(image , name , description , price);


    document.querySelector("div").append(div );


})