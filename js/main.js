$(function() {
    'use strict';

    $("header ul.navbar-nav li").click(function (ee){
        // ee.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.carousel-slider .owl-carousel').owlCarousel({
        rtl:true,
        nav:true,
        dots: false,
        navText: ["<", ">"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});