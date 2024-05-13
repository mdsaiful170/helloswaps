let bgBtn = document.querySelector('#bg_btn');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');



window.onscroll = () =>{

   loginForm.classList.remove('active');
   navbar.classList.remove('active');
}


document.querySelector('#user_btn').onclick = () => {
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
}

document.querySelector('#bars_btn').onclick = () =>{
   navbar.classList.toggle('active');
   loginForm.classList.remove('active');
}















var swiper = new Swiper(".feature-slider", {
   loop: true,
   grabCursor: true,
   center:true,
   spaceBetween: 100,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   autoplay: {
      dealy: 1500,
      desibleInteraction: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,

      },
      768: {
         slidesPerView: 2,

      },

      991: {
         slidesPerView: 3,
      },
   },
});





bgBtn.onclick = () => {
   bgBtn.classList.toggle('fa-sun');
   if (bgBtn.classList.contains('fa-sun')) {
      document.body.classList.add('active')
   }
   else {
      document.body.classList.remove('active');
   }
}

