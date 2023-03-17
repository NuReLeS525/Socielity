$(function() {
  
  $('.trust__slider').slick({
    arrows: false,
    slidesToShow: 1,
    draggable: true,
    dots: true,
    appendDots: $('.trust__slider-dots'),
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

    $('.questions__acc-link').on('click', function (e) {
      e.preventDefault()
      // $(this).toggleClass('questions__acc-link--active')
      if ($(this).hasClass('questions__acc-link--active')) {
        $(this).removeClass('questions__acc-link--active')
        $(this).children('.questions__acc-text').slideUp()
      } else {
        $('.questions__acc-link').removeClass('questions__acc-link--active')
        $('.questions__acc-text').slideUp()
        $(this).addClass('questions__acc-link--active')
        $(this).children('.questions__acc-text').slideDown()
      }
    })

    $('.award__slider').slick({
      arrows: false,
      slidesToShow: 1,
      draggable: true,
      dots: true,
      appendDots: $('.award__slider-dots'),
    })
})