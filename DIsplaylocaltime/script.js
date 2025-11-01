let clock=document.querySelector("#time");


setInterval(function(){
    let date = new Date().toLocaleTimeString();
    clock.innerText=`${date}`;
}, 1000);