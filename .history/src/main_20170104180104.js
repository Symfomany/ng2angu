$(function() {
    $(".button-collapse").sideNav();

    $(".collection .collection-item.avatar").velocity("slideUp", {
        duration: 350
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