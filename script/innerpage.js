var item = JSON.parse(localStorage.getItem("item"));

document.querySelector(".innshoeimg11").src = item.image[0];

document.querySelector(".innshoedetailname").innerHTML = item.product_name ;
 
document.querySelector(".innershoesdetaildescription").innerHTML = item.product_details ;

document.querySelector(".innershoesdetailprice").innerHTML = "₹ " + item.price ;

item.sizes.map(function(elem){
    var div1 = document.createElement("div") ;
    var para1 = document.createElement("p") ;

    para1.innerText = elem ;
    div1.append(para1) ;
    document.querySelector("#innshoesizes").append(div1);

    div1.addEventListener("click" , function(){
        sizetocart(elem);
    })

})


function sizetocart(elem){
    item.size = elem ;
    localStorage.setItem("item",JSON.stringify(item));
        
     } 
     
     document.querySelector("#innershoesdetailsbtn").addEventListener("click" , function(){
        if(item.size != undefined){
            Gotocart(item);
        }
        else{
            alert("choose shoe size");
        }
     }) 
 




     
function Gotocart(item){
    item.qty = 1;
    var cartarr = JSON.parse(localStorage.getItem("mencartarr")) || [];
    
    var flag = true;
    for(var i=0;i<cartarr.length;i++){
        if(item.id === cartarr[i].id){
            flag = false;
        }
    }
    if(flag === true){
        cartarr.push(item);
    }

    localStorage.setItem("mencartarr" , JSON.stringify(cartarr) );

     
     }


