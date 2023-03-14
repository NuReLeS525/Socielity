$(function() {
  
  $('.trust__slider').slick({
    arrows: false,
    slidesToShow: 1,
    draggable: true,
    dots: true,
    appendDots: $('.slider__dots'),
  })
  
  $('.team__slider').slick({
    arrows: true,
    appendArrows: $('.team__arrows'),
    slidesToShow: 1,
    draggable: false,
    dots: false,
  })

})