$(function() {

    const intro = $("#intro");
    const header = $("#header");
    const nav = $("#nav");
    const burger = $("#burger");




    /* Fix header */

    $(window).on("scroll load resize", function() {
        let elementHeight = $(intro).innerHeight();
        let scrollTop = $(this).scrollTop();

        if (scrollTop > elementHeight) {
            $(header).addClass("fixed");
            header.attr("data-show", "fixed");
        } else {
            $(header).removeClass("fixed");
            header.attr("data-show", "unfixed");
        }

    });



    /* Nav */

    $(burger).on("click", function() {
        let heightDevice = $(window).height();
        let heightHeader = $(header).height();

        if (heightDevice <= 800) {
            $(nav).css("height", (heightDevice - heightHeader) + "px");
        }

        $(nav).toggleClass("show");
        $(header).toggleClass("show");
        $(this).toggleClass("show");

    });

    $(window).on("resize", function() {
        let windowWidth = $(this).width();

        if (windowWidth > 991) {
            $(nav).removeClass("show");
            $(header).removeClass("show");
            $(this).toggleClass("show");
        }
    });


});