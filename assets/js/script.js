/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();

    jQuery('.toast__close').click(function(e){
        e.preventDefault();
        var parent = $(this).parent('.toast');
        parent.slideUp("slow", function() { $(this).remove(); } );
    });

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

    var formatForSlider = {
        from: function (formattedValue) {
            return Number(formattedValue);
        },
        to: function (numericValue) {
            return Math.round(numericValue);
        }
    };

    if ($('#formatting-slider').length != 0) {
        var formatSlider = document.getElementById('formatting-slider');
        noUiSlider.create(formatSlider, {
            // Values are parsed as numbers using the "from" function in "format"
            start: ['20.0', '80.0'],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            },
            format: formatForSlider,
            tooltips: {
                // tooltips are output only, so only a "to" is needed
                to: function (numericValue) {
                    return numericValue.toFixed(1);
                }
            }
        });

        formatSlider.noUiSlider.set(['25.666', '57.66']);

        var formatValues = [
            document.getElementById('formatting-start'),
            document.getElementById('formatting-end')
        ];

        formatSlider.noUiSlider.on('update', function (values, handle, unencoded) {
            // "values" has the "to" function from "format" applied
            // "unencoded" contains the raw numerical slider values
            formatValues[handle].innerHTML = values[handle];
        });
    }

    $('.show-grid').on('click', function (e) {
        e.preventDefault();
        $('.hide-archive').hide();
        $('.grid-items').fadeIn();
    })

    $('.show-list').on('click', function (e) {
        e.preventDefault();
        $('.hide-archive').hide();
        $('.list-items').fadeIn();
    })

    $('.btn-hideshow-password').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.hasClass('showed')) {
            $this.removeClass('showed');
            $this.parent().find('input').attr('type', 'text');
            $this.find('i').addClass('bi-eye');
            $this.find('i').removeClass('bi-eye-slash');
        } else {
            $this.addClass('showed');
            $this.parent().find('input').attr('type', 'password');
            $this.find('i').addClass('bi-eye-slash');
            $this.find('i').removeClass('bi-eye');
        }
    })

    if ($('.swiper-product').length != 0) {
        const swiper_thumbnail = new Swiper(".swiper_thumbnail", {
            slidesPerView: 6,
            spaceBetween: 12,
        })

        const swiper = new Swiper('.swiper-product', {
            loop: false,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".swiper-product .swiper-button-next",
                prevEl: ".swiper-product .swiper-button-prev",
            },
            thumbs: {
                swiper: swiper_thumbnail,
            },
        })
    }

    if ($('.js-example-basic-single').length != 0) {
        $('.js-example-basic-single').select2();
    }

    $('.upload-file-user input').on('change', function(evt) {
        console.log(evt.target.files)
        readURL(this)
    });

    $('.open-filters').on('click', function (e) {
        e.preventDefault();
        $('.filter-side').toggleClass('show');
    })

});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('.upload-file-user img').attr('src', e.target.result);
            $('.upload-file-user img').hide();
            $('.upload-file-user img').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}