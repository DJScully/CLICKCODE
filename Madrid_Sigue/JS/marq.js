$(function () {
    var $diaplay = $('#display'), counter = 0;
    $('.marquee')
        .bind('beforeStarting', function(){
            $diaplay.show().html('started').delay(1000).fadeOut('fast');
        })
        .bind('finished', function(){
            counter++;
            $diaplay.show().html('finished ' + counter + ' times').delay(1000).fadeOut('fast');
        })
        //Apply plugin
    .marquee({
        duration: 3000
    })
});