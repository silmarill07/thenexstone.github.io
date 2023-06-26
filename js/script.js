function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});;
$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.header__menu, .burger__line').toggleClass('active');
		$('body').toggleClass('lock');
	});
});;
// let nav = $('.header__body');  // сексия, родитель
scrollPrev = 0;
let navFunc = $('.menu__list')  //   список с меню

$(window).scroll(function () {

	let scrolled = $(window).scrollTop();

	if (scrolled > 105 && scrolled > scrollPrev) {
		nav.addClass('out');
	} else {
		nav.removeClass('out');
	}
	scrollPrev = scrolled;
	if (navFunc.hasClass('nav_active')) {
		header.removeClass('out');
	} else {

	}
});;

  function openPopup(popupId, videoId) {
    var popup = document.getElementById(popupId);
    var iframe = popup.querySelector('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoId;
    popup.classList.add('show');
  }
  
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    var iframe = popup.querySelector('iframe');
    iframe.src = '';
    popup.classList.remove('show');
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  
  window.onscroll = function showHeader() {
    let nav = document.querySelector('.header');
  
    if (window.pageYOffset > 200) {
      nav.classList.add('active1')
    } else {
      nav.classList.remove('active1')
    }
  }
  
  $(function () {
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
  });

// window.addEventListener('scroll', () => {
// 	let scrollDistance = window.scrollY;

// 	if (window.innerWidth > 768) {
// 		document.querySelectorAll('.section').forEach((el, i) => {
// 			if (el.offsetTop - document.querySelector('.header__menu').clientHeight <= scrollDistance) {
// 				document.querySelectorAll('.header__menu a').forEach((el) => {
// 					if (el.classList.contains('active')) {
// 						el.classList.remove('active');
// 					}
// 				});

// 				document.querySelectorAll('.header__menu li')[i].querySelector('a').classList.add('active');
// 			}
// 		});
// 	}
// });

document.addEventListener("DOMContentLoaded", function () {
  // Инициализация библиотеки ScrollReveal
  ScrollReveal().reveal(".section", {
    delay: 200,
    distance: "50px",
    easing: "ease-in-out",
    origin: "top",
    interval: 200,
  });
});
