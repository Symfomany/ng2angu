$(function() {
    $(".button-collapse").sideNav();

    setTimeout(function() {
        $('#preloader').velocity({
            opacity: 0.8,
            translateY: "-80px"
        }, {
            duration: 400,
            complete: function() {
                $('#hola').velocity({
                    translateY: "-150%"
                }, {
                    duration: 1000,
                    easing: [0.7, 0, 0.3, 1],
                    complete: function() {
                        $('.home').addClass('animate-border divide');
                    }
                })
            }
        })
    }, 1000);

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