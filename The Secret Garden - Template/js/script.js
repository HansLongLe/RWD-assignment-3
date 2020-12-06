//MAKE THE MAGIC HAPPEN
$(document).mousemove(function (event) {
    $("#net").css({
        left: event.pageX,
        top: event.pageY
    });
});
