$(function() {
  console.log('Hello Bootstrap5');
  $(document).ready(function () {
    $(window).scroll(function(){
      const scrollTop = $(window).scrollTop();
      const navHeight = $('.navbar').height();
      console.log(scrollTop,navHeight)
      if(scrollTop > navHeight) {
        $('.navbar').addClass('fixed-top');
        $('.navbar').addClass('shadow-sm');
        $('body').css('paddingTop', navHeight)
      } else {
        $('.navbar').removeClass('fixed-top');
        $('.navbar').removeClass('shadow-sm');
        $('body').css('paddingTop', 0)
      }
    })
  });
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // effect: 'fade',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});