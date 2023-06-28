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
// $(document).ready(function() {
// 	$('.menu__burger').click(function(event) {
// 		$('.header__menu, .burger__line').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });

$(document).ready(function() {
	$('.menu__burger').click(function(event) {
	  $('.header__menu, .burger__line').toggleClass('active');
	  $('body').toggleClass('lock');
	});
  
	// Get the height of the menu
	const menuHeight = $('.header__body').outerHeight();
  
	// Get all the menu links
	const menuLinks = document.querySelectorAll('.header__link');
  
	// Add an event listener to each menu link
	menuLinks.forEach(link => {
	  link.addEventListener('click', function(e) {
		e.preventDefault();
  
		// Get the target section ID from the link's href attribute
		const targetId = link.getAttribute('href');
  
		// Calculate the target section's offset from the top of the document
		const targetOffset = $(targetId).offset().top - menuHeight;
  
		// Close the mobile menu
		$('.header__menu, .burger__line').removeClass('active');
		$('body').removeClass('lock');
  
		// Animate scrolling to the target section
		$('html, body').animate({
		  scrollTop: targetOffset
		}, 800);
	  });
	});
  
	// Add an event listener to the window scroll event
	window.addEventListener('scroll', function() {
	  // Get the current scroll position, taking into account the menu height
	  const scrollPosition = window.pageYOffset + menuHeight + 20; // Add an extra 20 pixels for the title height
  
	  // Iterate through each menu link
	  menuLinks.forEach(link => {
		const targetId = link.getAttribute('href');
  
		// Get the target section by ID
		const targetSection = document.querySelector(targetId);
  
		// Get the position and height of the target section
		const targetPosition = targetSection.offsetTop - 20; // Subtract the title height
		const targetHeight = targetSection.offsetHeight;
		const targetBottom = targetPosition + targetHeight;
  
		// Add or remove the "active" class based on the scroll position
		if (scrollPosition >= targetPosition && scrollPosition < targetBottom) {
		  link.classList.add('active');
		} else {
		  link.classList.remove('active');
		}
	  });
	});
  });
  ;
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

// window.addEventListener('load', function() {
// 	var header = document.querySelector('.header');
// 	header.classList.add('visible');
// });

// window.addEventListener('scroll', function() {
// 	var header = document.querySelector('.header');
// 	header.classList.toggle('sticky', window.scrollY > 500);
// });


// var lastId,
//     topMenu = $("#header__list"),
//     topMenuHeight = topMenu.outerHeight()+15,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function(){
//       var item = $($(this).attr("href"));
//       if (item.length) { return item; }
//     });

	// Get all the menu links
	// const menuLinks = document.querySelectorAll('.header__link');

	// // Add an event listener to each menu link
	// menuLinks.forEach(link => {
	// 	link.addEventListener('click', function (e) {
	// 		e.preventDefault();

	// 		// Get the target section ID from the link's href attribute
	// 		const targetId = link.getAttribute('href');

	// 		// Scroll smoothly to the target section
	// 		document.querySelector(targetId).scrollIntoView({
	// 			behavior: 'smooth'
	// 		});
	// 	});
	// });

	// Add an event listener to the window scroll event
	// window.addEventListener('scroll', function () {
	// 	// Get the current scroll position
	// 	const scrollPosition = window.scrollY;

	// 	// Iterate through each menu link
	// 	menuLinks.forEach(link => {
	// 		const targetId = link.getAttribute('href');

	// 		// Get the target section by ID
	// 		const targetSection = document.querySelector(targetId);

	// 		// Get the position and height of the target section
	// 		const targetPosition = targetSection.offsetTop;
	// 		const targetHeight = targetSection.offsetHeight;
	// 		const targetBottom = targetPosition + targetHeight;

	// 		// Add or remove the "active" class based on the scroll position
	// 		if (scrollPosition >= targetPosition && scrollPosition < targetBottom) {
	// 			link.classList.add('active');
	// 		} else {
	// 			link.classList.remove('active');
	// 		}
	// 	});
	// });