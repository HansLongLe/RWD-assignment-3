$(document).mousemove(function (event) {
    $("#net").css({
        left: event.pageX,
        top: event.pageY
    });
});

<<<<<<< HEAD

$("#apple2").on("click", function () {
    $("#apple2").animate({
        right: '+=855',
        top: '+=480'
    });
});

$("#apple1").on("click", function () {
    $("#apple1").animate({
        right: '+=760',
        top: '+=580'
    });
});

$("#apple3").on("click", function () {
    $("#apple3").animate({
        right: '+=680',
        top: '+=420'
    });
});


=======

>>>>>>> 7a3c6baf1cbdac2827d4d27ea7cc5359324f3039
$(document).ready(function () {
    var rotated = false;
    $('#wateringcan').on('click', function () {
        rotated = !rotated;
        if (rotated) {
            $(this).addClass("Rotate")
        } else {
            $(this).addClass("Rotateback")
            rotated = false;
        }
    });
<<<<<<< HEAD
=======
});

//butterfly
$(document).ready(function () {
    animateButterfly();

>>>>>>> 7a3c6baf1cbdac2827d4d27ea7cc5359324f3039
});

function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 200;
    var w = $(window).width() - 200;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateButterfly() {
    var newq = makeNewPosition();
    $('#butterfly').animate({
        top: newq[0],
        left: newq[1]
    }, 3000, function () {
        animateButterfly();
    });

};
$('#butterfly').hover(function () {
    butterflyOnHover();
})

function butterflyOnHover() {
    var newq = makeNewPosition();
    $('#butterfly').animate({
        top: newq[0],
        left: newq[1]
    }, 500, function () {
        animateButterfly();
    });
};
$('#butterfly').mouseover(function () {
    butterflyMouseOver();
})

function butterflyMouseOver() {
    var newq = makeNewPosition();
    $('#butterfly').animate({
        top: newq[0],
        left: newq[1]
    }, 3000, function () {
        animateButterfly();
    });
};
