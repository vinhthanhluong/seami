export default function SlideModule() {
    document.querySelectorAll('.swiper-custom').forEach(el => {
        const slider = el.querySelector('.swiper');
        const pagination = el.querySelector('.swiper-pagination');
        const prevBtn = el.querySelector('.swiper-button-prev');
        const nextBtn = el.querySelector('.swiper-button-next');
        try {
            new Swiper(slider, {
                speed: 1200,
                slidesPerView: 'auto',
                autoHeight: false,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                // autoplay: {
                //     delay: 4000,
                // },

                pagination: {
                    el: pagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
                loop: true,
            });

          

        } catch (err) {
            console.log(err);
        }
    })


    if (document.querySelector('.swiper-effect')) {
        const swiper = document.querySelector('.swiper-effect');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    320: {
                        coverflowEffect: {
                            rotate: -20,
                            stretch: -10,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        },
                    },
                    480: {
                        coverflowEffect: {
                            rotate: -20,
                            stretch: -15,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        },
                    },
                    1200: {
                        coverflowEffect: {
                            rotate: -20,
                            stretch: -25,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        },

                    }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            });
        }
        catch (err) {
            console.log(err)
        }
    }


    document.querySelectorAll('.swiper-row-two').forEach(el => {
        const slider = el.querySelector('.swiper');
        const pagination = el.querySelector('.swiper-pagination');
        const prevBtn = el.querySelector('.swiper-button-prev');
        const nextBtn = el.querySelector('.swiper-button-next');
        try {
            new Swiper(slider, {
                speed: 1000,
                loop: false,
                // spaceBetween: 30,
                // slidesPerView: 3,
                // grid: {
                //     rows: 2,
                //     fill: 'row',
                // },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },

                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    576: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    768: {
                        spaceBetween: 15,
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row',
                        },
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                        grid: {
                            rows: 2,
                            fill: 'row',
                        },
                    },
                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                        grid: {
                            rows: 2,
                            fill: 'row',
                        },
                    }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            });
        } catch (err) {
            console.log(err);
        }
    })


    if (document.querySelector('.swiper-banner')) {
        const swiper = document.querySelector('.swiper-banner');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                // spaceBetween: 20,
                slidesPerView: 'auto',
                autoplay: {
                    delay: 4000,
                    pauseOnMouseEnter: true,
                },
                pagination: {
                    el: SliderPagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            });
            swiper.on('slideChangeTransitionStart', function () {
                if (swiper.el.querySelector('.swiper-slide-active video')) {
                    swiper.el.querySelectorAll('.swiper-slide video').forEach((x) => x.pause());
                }
            });
            const muteVideoWhenOverScroll = () => {
                const pinStopVideo = document.querySelector('.banners').offsetHeight;
                if (window.scrollY >= pinStopVideo) {
                    document.querySelectorAll('.banners .swiper-slide-active video').forEach((v) => v.pause());
                }

            };
            window.addEventListener('scroll', muteVideoWhenOverScroll);
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('.swiper-course')) {
        const swiper = document.querySelector('.swiper-course');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: false,
              
                pagination: {
                    el: SliderPagination,
                    clickable: true,
                },
               

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    320: {
                        spaceBetween: 15,
                        slidesPerView: 1,
                        autoHeight: true,
                    },
                    576: {
                        spaceBetween: 15,
                        slidesPerView: 2,
                        autoHeight: true,
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                        autoHeight: true,
                        allowTouchMove:false,
                    },
                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                        allowTouchMove:false,
                        autoHeight: true,
                       
                    }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('.swiper-demo')) {
        const swiper = document.querySelector('.swiper-demo');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 20,
                slidesPerView: 2,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    // if (document.querySelector('.swiper-style')) {
    //     const swiper = document.querySelector('.swiper-style');
    //     const sliderContainer = swiper.querySelector('.swiper');
    //     const SliderPagination = swiper.querySelector('.swiper-pagination');
    //     const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
    //     const sliderNextBtn = swiper.querySelector('.swiper-button-next');
    //     try {
    //         const swiper = new Swiper(sliderContainer, {
    //             speed: 1000,
    //             loop: true,
    //             spaceBetween: 20,
    //             slidesPerView: 1,
    //             // centeredSlides: true,
    //             // autoplay: {
    //             //     delay: 4000,
    //             // },
    //             pagination: {
    //                 el: '.swiper-pagination',
    //                 clickable: true,
    //             },

    //             navigation: {
    //                 nextEl: '.swiper-button-next',
    //                 prevEl: '.swiper-button-prev',
    //             },

    //             breakpoints: {
    //                 // 320: {
    //                 //     spaceBetween: 50
    //                 // },
    //                 // 480: {
    //                 //     spaceBetween: 30
    //                 // },
    //                 // 576: {
    //                 //     spaceBetween: 0,

    //                 // }
    //             }
    //             // observeParents:true,
    //             // observeSlideChildren: true,
    //             // observer: true,
    //         })
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }
}