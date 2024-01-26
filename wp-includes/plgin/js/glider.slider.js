new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 2,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 430,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
                itemWidth: 250,
                duration: 0.25
            }
        },
        {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 2,
                itemWidth: 250,
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                itemWidth: 250,
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1230,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                itemWidth: 250,
                duration: 0.25
            }
        }
    ]
});