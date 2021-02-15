var total = Number(document.getElementById("total-price").innerText);

var plusbtns = document.querySelectorAll("#btn_plus");
for (let btn of plusbtns){
    btn.addEventListener("click", function(){
        let price = Number(document.getElementById("prix" + btn.getAttribute("name")).innerHTML);
        let qty = Number(document.getElementById("quantité" + btn.getAttribute("name")).innerHTML);
        qty++;
        total += price;
        document.getElementById("total-price").innerText = total;
        document.getElementById("quantité" + btn.getAttribute("name")).innerHTML = qty;
        console.log(qty);
        console.log(price);
        console.log(total);
    });
}

var moinsbtns = document.querySelectorAll("#btn_moins");
for (let btn of moinsbtns){
    btn.addEventListener("click", function(){
        let price = Number(document.getElementById("prix" + btn.getAttribute("name")).innerHTML);
        let qty = Number(document.getElementById("quantité" + btn.getAttribute("name")).innerHTML);
        if(qty > 0){
            qty--;
            total -= price;
        }
        document.getElementById("total-price").innerText = total;
        document.getElementById("quantité" + btn.getAttribute("name")).innerHTML = qty;
        console.log(qty);
        console.log(price);
        console.log(total);
    })
}


let deleteBtns = document.querySelectorAll("#close");
for (let btn of deleteBtns){
    btn.addEventListener("click",function(){
        console.log(btn.parentNode)
        let price = Number(document.getElementById("prix" + btn.getAttribute("name")).innerHTML);
        let qty = Number(document.getElementById("quantité" + btn.getAttribute("name")).innerHTML);
        total -= price*qty;
        console.log(total);
        document.getElementById("total-price").innerText = total;
        btn.parentNode.remove();
    })
}


let heart = document.querySelectorAll(".like");
for(let like of heart){
    like.addEventListener("click",function(){
        console.log(heart)
        document.getElementById("like" + like.getAttribute("name")).style.backgroundColor="red"
        if(document.getElementById("like" + like.getAttribute("name")).style.backgroundColor ="red"){
            like.addEventListener("click",function(){
                document.getElementById("like" + like.getAttribute("name")).style.backgroundColor="white"
            })
        }
    })
}

