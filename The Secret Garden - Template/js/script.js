$(document).mousemove(function (event) {
    $("#net").css({
        left: event.pageX,
        top: event.pageY
    });
});


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

<<<<<<< Updated upstream


$(document).ready(function () {
    var rotated = false;
    $("#drops").hide();
    $('#wateringcan').on('click', function () {
        rotated = !rotated;
        if (rotated) {
            $(this).addClass("Rotate");
            $("#drops").show();
            $(".waterdrop").animate({
                top: '+=100'
            }, 1000);








        } else {
            $(this).addClass("Rotateback")
            $("#drops").hide();
            rotated = false;
        }
    });
});

=======
var wateringCanClicked = 1;

$('#wateringcan').click(function () {
    wateringCanClicked++;
    if (wateringCanClicked % 2) {
        $('#wateringcan').animate({
            deg: 0
        }, {
            duration: 1200,
            step: function (now) {
                $(this).css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        })
    } else {
        $('#wateringcan').animate({
            deg: -50
        }, {
            duration: 1200,
            step: function (now) {
                $(this).css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        })
    }
})
>>>>>>> Stashed changes
//butterfly
$(document).ready(function () {
    animateButterfly();
});

function makeNewPosition() {

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
