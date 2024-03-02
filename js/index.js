let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =()=>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    
}



var swiper = new Swiper(".review-slide", {
   loop:true,
   spaceBetween: 20,

   autoplay:{
    delay: 3000,
    disableOnInteraction: false,
   },

   breakpoints:{
    0:{
        slidesPerView:1,
    },
    768:{
        slidesPerView: 2,
    },
    1020:{
        slidesPerView: 3,
    },
   },
  });