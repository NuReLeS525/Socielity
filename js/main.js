$(function() {
  
  $('.trust__slider').slick({
    arrows: false,
    slidesToShow: 6,
    draggable: true,
    waitForAnimate: false,
    dots: true,
    infinite: true,
    appendDots: $('.trust__slider-dots'),
    responsive:
    [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          dots: false,
          vertical: true,
          verticalSwiping: true,
          draggable: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          dots: false,
          vertical: true,
          verticalSwiping: true,
          draggable: true,
        },
      },
    ]
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
      slidesToShow: 7,
      draggable: true,
      dots: true,
      waitForAnimate: false,
      infinite: true,
      appendDots: $('.award__slider-dots'),
      responsive:
      [
        {
          breakpoint: 922,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 555,
          settings: {
            slidesToShow: 3,
            dots: false,
          }
        },
        {
          breakpoint: 430,
          settings: {
            slidesToShow: 2,
            dots: false,
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            dots: false,
          }
        },
      ]
    })

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false   ) {
        $('.burger').addClass('burger--follow')
      } else {
        $('.burger').removeClass('burger--follow')
      }
    })

    $('.burger, .overlay, .header__top').on('click', function(e) {
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
      $('.overlay').toggleClass('overlay--show')
      $('.burger').toggleClass('burger--cross')
    })

    $('.footer__title--slide').on('click', function() {
      $(this).next().slideToggle('')
    })
})