$(function() {

    /* const intro = $("#intro"); */
    const header = $("#header");
    const nav = $("#nav");
    const burger = $("#burger");



    /* Nav */

    $(burger).on("click", function() {
        $(nav).toggleClass("show");
        $(header).toggleClass("show");
        $(this).toggleClass("show");
    });

    $(window).on("resize", function() {
        let windowWidth = $(this).width();

        if (windowWidth > 991) {
            $(nav).removeClass("show");
            $(header).removeClass("show");
        }
    });


});