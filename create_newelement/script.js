let btn2= document.querySelector("#btn2");
let number=1;
btn2.addEventListener("click",function(){
    if(number<=18){
    let div= document.createElement("div");
    div.innerHTML=number;
    document.getElementById("division").prepend(div);
    
    div.style.backgroundColor="blue";
    div.style.width="40%";
    div.style.height="40%";
    div.style.marginInline="10px";
    div.style.marginBlock="10px";
    div.style.display="inline-grid";
    }
    number++;
    if(number>18)
    {let h2= document.querySelector("h2");

    h2.innerHTML="Elements are created"
         
    }
});
    
