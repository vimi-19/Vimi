/* Initialize Swiper */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var x = window.matchMedia("(max-width: 1518px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
    if (x.matches) { // If media query matches
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 20,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        })
    } else {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 20,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        })
    }
}

var y = window.matchMedia("(max-width: 1024px)")
myFunction(y) // Call listener function at run time
y.addListener(myFunction) // Attach listener function on state changes

function myFunction(y) {
    if (y.matches) { // If media query matches
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        })
    } else {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        })
    }
}

var z = window.matchMedia("(max-width: 894px)")
myFunction(z) // Call listener function at run time
z.addListener(myFunction) // Attach listener function on state changes

function myFunction(z) {
    if (z.matches) { // If media query matches
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        })
    } else {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        })
    }
}

var h = window.matchMedia("(max-width: 768px)")
myFunction(h) // Call listener function at run time
h.addListener(myFunction) // Attach listener function on state changes

function myFunction(h) {
    if (h.matches) { // If media query matches
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        })
    } else {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        })
    }
}