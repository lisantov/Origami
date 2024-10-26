let button = document.querySelector('.to-top'); 
let isShowing = false;

function CheckScroll(ev){
    if(window.scrollY > 800 && !isShowing){
        button.style.animation = '';
        button.style.animation = 'in 0.15s linear 1 normal forwards';
        isShowing = true;
        console.log('In');
    }
    else if(window.scrollY < 800 && isShowing){
        button.style.animation = '';
        button.style.animation = 'out 0.15s linear 1 normal forwards';
        isShowing = false;
        console.log('Out');
    }
}
window.onscroll = CheckScroll;