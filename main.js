$(document).ready(function() {
    $("#lines").click(function() {
        $(this).hide();
        $('#cross').fadeIn(700);
        $('#nav-hid').fadeIn(700);
    });

    // $("#cross").click(function () {
    //     $(this).hide();
    //     $('#lines').css('display', 'block');
    //     $('#nav-hid').hide();
    // });
});

$(document).on('click', function(event) {
    // ... clicked on the 'body', but not inside of #nav-hid
    $('#cross').hide();
    $('#lines').fadeIn(700);
    $('#nav-hid').fadeOut(500);
});
$('#nav-hid').on('click', function(event) {
    event.stopPropagation();
});
$('#lines').on('click', function(event) {
    event.stopPropagation();
});
window.onload = function() {
        var duration = 800;
        var bird = Snap.select("#bird");
        var parts = ['wing_b', 'head', 'body', 'wing_f'];
        var elements = [];
        var w = bird.attr('width');
        var h = bird.attr('height');


        for (i = 0; i < parts.length; i++) {
            var element = bird.select("#" + parts[i]);
            element.attr('d1', element.attr('d'));
            elements.push(element);
        }

        var anim1 = function() {
            bird.stop().animate({ height: h * .85 }, duration, mina.easeinout);
            for (i = 0; i < elements.length; i++) {
                elements[i].stop().animate({
                    d: elements[i].attr('d2')
                }, duration, mina.easeinout, anim2);
            }
        }

        var anim2 = function() {
            bird.stop().animate({ width: w, height: h }, duration, mina.easeinout);
            for (i = 0; i < elements.length; i++) {
                elements[i].stop().animate({
                    d: elements[i].attr('d1')
                }, duration, mina.easeinout, anim1);
            }
        }

        anim1();
    }
    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
buzz.defaults.formats = ['mp3'];
buzz.defaults.preload = 'metadata';


var NewOrleansStrut = new buzz.sound("https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/6717250_patrickcoen_new-orleans-brass-band-strut_01", {
    formats: ["mp3"],
    preload: true,
    autoplay: false,
    volume: 100,
    loop: true
});
$(function() {
    $('.btn').click(function() {
        $('body').hasClass('open') ? $('body').removeClass('open') : $('body').addClass('open')
    })
})