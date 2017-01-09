$(function() {
    $('a.filter').click(function() {
            console.log("laaa");
            if ($('.filterForm').is(':visible')) {
                $('.filterForm').velocity({ marginTop: "-100%" }, { duration: 1000 })

            } else {
                $('.filterForm').velocity({ marginTop: "0%" }, { duration: 1000 })
            }
        })
        // $('.collection .collection-item').velocity({ scale: 1.25, translateY: 50, boxShadowBlur: 35 }, { duration: 1500 });

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


})