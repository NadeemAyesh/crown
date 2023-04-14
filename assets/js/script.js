/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();

    if ($('.main-swiper').length != 0) {
        const swiper = new Swiper('.main-swiper', {
            // Optional parameters
            loop: true,
            slidesPerView: 1,

            // If we need pagination
            pagination: {
                el: '.main-swiper .swiper-pagination',
            },
        });
    }

    if ($('.banner-swiper').length != 0) {
        const swiper = new Swiper('.banner-swiper', {
            // Optional parameters
            loop: true,
            slidesPerView: 1,

            // If we need pagination
            /* pagination: {
                el: '.banner-swiper .swiper-pagination',
            }, */
            navigation: {
                nextEl: '.banner-big-wrap .swiper-button-next',
                prevEl: '.banner-big-wrap .swiper-button-prev',
            },
        });
    }

    if ($('.category-swiper').length != 0) {
        const swiper = new Swiper('.category-swiper', {
            // Optional parameters
            loop: true,
            navigation: {
                nextEl: '.category-swiper .swiper-button-next',
                prevEl: '.category-swiper .swiper-button-prev',
            },
            breakpoints: {
                // when window width is >= 320px
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                // when window width is >= 680px
                680: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                // when window width is >= 640px
                840: {
                    slidesPerView: 4,
                    spaceBetween: 15
                },
                // when window width is >= 640px
                991: {
                    slidesPerView: 5,
                    spaceBetween: 15
                },
                // when window width is >= 640px
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 15
                }
            },
        });
    }

});