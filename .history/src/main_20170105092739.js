$(function() {
    $('.collapsible').collapsible();

    // $('a.filter').click(function() {
    //     console.log("laaa");
    //     if ($('.filterForm').is(':visible')) {
    //         $('.filterForm').velocity({ marginTop: "-100%" }, { duration: 1000 })

    //     } else {
    //         $('.filterForm').velocity({ marginTop: "0%" }, { duration: 1000 })
    //     }
    // })

    $(window).load(function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });

    $(".button-collapse").sideNav();

    // $('.home').addClass('animated fadeIn');
    // zoomIn(e,inOut,wait); 
    // $('#preloader').velocity({
    //     opacity: 0.2,
    //     translateY: "-80px"
    // }, {
    //     duration: 200,
    //     complete: function() {
    //         $('#hola').velocity({
    //             translateY: "-150%"
    //         })
    //     }
    // });

    $('.small, .small-shadow').velocity({
        rotateZ: [0, -360]
    }, {
        loop: true,
        duration: 2000
    });
    $('.medium, .medium-shadow').velocity({
        rotateZ: -240
    }, {
        loop: true,
        duration: 2000
    });
    $('.large, .large-shadow').velocity({
        rotateZ: 180
    }, {
        loop: true,
        duration: 2000
    });
})