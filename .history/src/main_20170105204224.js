$(function() {
    // $('.collection .collection-item').velocity({ scale: 1.25, translateY: 50, boxShadowBlur: 35 }, { duration: 1500 });

    $(".button-collapse").sideNav();
    $('.modal').modal({
        opacity: 0.2,
    });

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
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