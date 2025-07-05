let clock=document.querySelector("#clock");


setInterval(function(){
    let date = new Date().toLocaleTimeString();
    clock.innerText=`${date}`;
}, 1000);