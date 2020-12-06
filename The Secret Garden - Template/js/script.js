$(document).mousemove(function (event) {
    $("#net").css({
        left: event.pageX,
        top: event.pageY
    });
});


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
});

//butterfly
$(document).ready(function () {
    animateButterfly();

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
