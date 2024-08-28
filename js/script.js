/* toggles the hamburger icon  */
/* Reference */
/* https://coco-factory.jp/ugokuweb/move01/5-2-4/ */
// $(".hamburger").click(function () {
//     $(this).toggleClass('active');
// });
var isHamburger = false;
document.querySelector('.hamburger').addEventListener('click', function() {
    if (!isHamburger) {
        document.querySelector('.hamburger').classList.add('active');
        isHamburger = true;
    } else { 
        document.querySelector('.hamburger').classList.remove('active');
        isHamburger = false;
    }
});

/* handles events on loading website  */
/* Reference */
/* https://appleple.github.io/scroll-hint/ */
window.addEventListener('DOMContentLoaded', function() {
    
    var images = document.querySelectorAll('.menu-header-image');
    var menuRow = document.querySelectorAll('.menumain');
    var platter = this.document.querySelectorAll('.platterrow');

    images.forEach(function(image) {
        image.classList.add('show');
    });

    menuRow.forEach(function(menuRow) {
        menuRow.classList.add('show');
    });

    platter.forEach(function(platter) {
        platter.classList.add('show');
    })

    new ScrollHint('.scrolling-menu');

    /* toggles the images on scroll */
    /* Reference */
    /* https://www.youtube.com/watch?v=d2eL3O_yRoc&t=115s */
    // $(function () {
    //     $(window).scroll(function () {
    //         $('.menu').each(function () {
    //             var $this = $(this);
    //             var targetElement = $(this).offset().top;
    //             var scroll = $(window).scrollTop();
    //             var windowHeight = $(window).height();
    //             if (scroll > targetElement - windowHeight) {
    //                 $this.addClass('scrollin');
    //             }
    //         });
    //     });
    // });
    
    window.addEventListener('scroll', function() {
        this.document.querySelectorAll('.menu').forEach(function(element) {
            var targetElement = element.offsetTop;
            var scroll = window.scrollY;
            var windowHeight = window.innerHeight;
            if (scroll > targetElement - windowHeight) {
                element.classList.add('scrollin');
            }
        });
    })
});

var isZoomed = false;
var imageBox = document.getElementById('large-image-box');
var image = document.getElementById('large-image')

/* displays big image of the clicked image  */
function imageClick(clickedImage) {
    var path = clickedImage.src;
    var descirption = clickedImage.alt;
    image.src = path;
    image.alt = descirption;
    imageBox.style.display = 'block';
    isZoomed = true;
}

/* exits the large image */
function exitButton() {
    isZoomed = false;
    imageBox.style.display = 'none';
}

var isNavigationViewable = false;

/*  */
function displayNavigation() {
    var navigation = document.getElementById('miniNavigation');
    var hamburger = document.getElementById('hamburgerIcon')
    if (!isNavigationViewable) {
        navigation.style.display = 'block';
        hamburger.style.position = 'fixed';
        hamburger.style.top = 0;
        hamburger.style.right = 0;
        hamburger.style.marginTop = '4%'
        isNavigationViewable = true;
    } else {
        navigation.style.display = 'none';
        hamburger.style.position = 'relative';
        hamburger.style.removeProperty('top');
        hamburger.style.removeProperty('right');
        hamburger.style.marginTop = 0
        isNavigationViewable = false;
    }
}

window.addEventListener('resize', function(event) {
    var windowWidth = window.innerWidth;
    if (windowWidth > 830 && isNavigationViewable) {
        this.document.getElementById('hamburgerIcon').click();
        this.document.getElementById('arrowDown').click();
    }
});

var isDown = false;
function arrowDown() {
    var arrow = document.getElementById("arrowDown");
    var mini = document.getElementById("miniSubBlock");
    if (!isDown) {
        arrow.style.transform = 'rotate(180deg)';
        mini.style.display = 'flex';
        isDown = true;
    } else {
        arrow.style.transform = 'rotate(90deg)';
        mini.style.display = 'none';
        isDown = false;
    }
}