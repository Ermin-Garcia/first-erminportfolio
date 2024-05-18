const nav = document.querySelector('.navbar');
const menu = document.querySelector('#menu-icon');
const clo = document.querySelector('#close-icon');

menu.addEventListener('click', ()=> {
    nav.style.display = 'flex';
    nav.style.top = '0';
})
clo.addEventListener('click', ()=> {    
    nav.style.top = '-1100px';    
})


