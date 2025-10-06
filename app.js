
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const carousel = document.querySelector('.carousel');
const list = document.querySelector('.list');
let items = list.querySelectorAll('.item'); 
const timeRunningBar = document.querySelector('.timeRunning'); 


const timeRunning = 1050; 
const timeAutoNext = 7000; 


let runAuto;    
let runTimeout; 

nextBtn.onclick = function(){
    clearTimeout(runAuto);
    clearTimeout(runTimeout);
    showSlider('next');
}

prevBtn.onclick = function(){
    clearTimeout(runAuto);
    clearTimeout(runTimeout);
    showSlider('prev');
}


function showSlider(type) {
    
    clearTimeout(runTimeout);
    
    
    items = list.querySelectorAll('.item'); 
    
    
    carousel.classList.remove('next', 'prev');
    carousel.offsetWidth; 
    
    
    if(type === 'next'){
        list.appendChild(items[0]); 
        carousel.classList.add('next');
    } else {
        list.prepend(items[items.length - 1]); 
        carousel.classList.add('prev');
    }

    
    runTimeout = setTimeout(() => {
        carousel.classList.remove('next', 'prev');
        
       
        initRunAuto(); 
    }, timeRunning); 
}


function autoNext() {
    showSlider('next');
}

function initRunAuto() {
    
    clearTimeout(runAuto);
    
    
    runAuto = setTimeout(autoNext, timeAutoNext);
    
    
    timeRunningBar.style.animation = 'none';
    timeRunningBar.offsetHeight; 
    timeRunningBar.style.animation = null; 
}

initRunAuto();