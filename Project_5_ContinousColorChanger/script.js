const start = document.querySelector('#start');
const stopp = document.querySelector('#stop');

// Generating random colors

const randomColor = ()=>{
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
console.log(randomColor());
let interval;
const startChangingColor = function(){
    function change(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!interval){
        interval = setInterval(change,1000);
    }
};
const stoppChangingColor = function(){
    clearInterval(interval);
    interval = null;
    document.body.style.backgroundColor = '#212121';
};

start.addEventListener('click',startChangingColor);
stopp.addEventListener('click',stoppChangingColor);



