$(function() {
    $(".button-collapse").sideNav();

    $('.home').delay(200).addClass('animated slideInUp');

    $('#preloader').velocity({
        opacity: 0.2,
        translateY: "-80px"
    }, {
        duration: 400,
        complete: function() {
            $('#hola').velocity({
                translateY: "-150%"
            })
        }
    });

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