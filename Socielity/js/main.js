$(function() {
  
  $('.trust__slider').slick({
    arrows: false,
    slidesToShow: 1,
    draggable: true,
    dots: true,
    appendDots: $('.slider__dots'),
  })
  
  $('.team__slider').slick({
    slidesToShow: 1,
    draggable: false,
    dots: false,
    infinite: false,
    arrows: false,
    })
    $('.arrow__prev').on('click', function(e) {
      e.preventDefault()
      $('.team__slider').slick('slickPrev')
    })
    $('.arrow__sub').on('click', function(e) {
      e.preventDefault()
      $('.team__slider').slick('slickNext')
    })

})