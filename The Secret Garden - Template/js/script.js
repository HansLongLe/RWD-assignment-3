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
