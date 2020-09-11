$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        speed: 2000,
        initialSlide: 1,
        loop: true,
        centeredSlides: true,
        slidesPerView:1.5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false
       }
    });　
});



$(function(){
window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.fadein').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
     $(this).addClass('scrollin');
    }
   });
  }
};
});




