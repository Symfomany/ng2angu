$(function() {
    $('.collapsible').collapsible();

    $('a.filter').click(function() {
        if ($('.filterForm').is(':visible')) {

        } else {

        }
        $('.filterForm').velocity("slideDown", { duration: 1500 })
    })

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