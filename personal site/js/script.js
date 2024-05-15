document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
        slidesPerView: "1",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    
});
var typingEffectElement = document.getElementById('typing-effect');
    var text = typingEffectElement.innerHTML;
    typingEffectElement.innerHTML = '';

    var index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingEffectElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); 
        }
    }

    typeWriter();
});
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
      window.requestAnimationFrame(topFunction);
      window.scrollTo(0, currentScroll - (currentScroll / 10));
  }
}

const swiper = new Swiper(".swiper2", {
  slidesPerView: "auto",
  allowTouchMove: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  loop: true,
  speed: 4000
});
