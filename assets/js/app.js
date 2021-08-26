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

        let deviceHeight = $(window).height();
        let headerHeight = $(header).height();

        $(nav).toggleClass("show");
        $(header).toggleClass("show");
        $(this).toggleClass("show");

        if (deviceHeight <= 850) {
            $(nav).css("height", (deviceHeight - headerHeight) + "px");
            $("html, body").toggleClass("hidden");
        } else {
            $(nav).css("height", "auto");
        }

    });

    $(window).on("resize", function() {

        let windowWidth = $(this).width();
        let deviceHeight = $(window).height();
        let headerHeight = $(header).height();
        let logoHeight = $(".header__logo").height();

        if (deviceHeight <= 850 && windowWidth < 991) {
            $(nav).css("height", (deviceHeight - headerHeight) + "px");
        } else if (windowWidth > 991) {
            $(nav).removeClass("show");
            $(header).removeClass("show");
            $(burger).removeClass("show");
            $(nav).css("height", logoHeight);
            $("html, body").removeClass("hidden");
        } else {
            $(nav).css("height", "auto");
        }
    });


});