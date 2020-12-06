<<<<<<< Updated upstream
//MAKE THE MAGIC HAPPEN
$(document).mousemove(function (event) {
    $("#net").css({
        left: event.pageX,
        top: event.pageY
    });
});
=======
$(document).ready(function()
{
   var rotated = false;
   $('#wateringcan').on('click',function()
   {
        rotated = !rotated;
        if(rotated)
        {
            $(this).addClass("Rotate")
        }
        else
        {
            $(this).addClass("Rotateback")
            rotated = false;
        }
   }); 

});
>>>>>>> Stashed changes
