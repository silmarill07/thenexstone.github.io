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

document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done'))
        {
            preloader.classList.add('done');
        }
    }, 1000);
}

var images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    perc_display = document.getElementById('load_perc'),
    preloader = document.getElementById('page-preloader');

for (var i = 0; i < images_total_count; i++)
{
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
}   

function image_loaded() {
    images_loaded_count++;

    perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count) << 0) + '%';

    if (images_loaded_count >= images_total_count) {
        setTimeout(function() {
            if (!preloader.classList.contains('done'))
            {
                preloader.classList.add('done');
            }
        }, 1000);
    }
}
