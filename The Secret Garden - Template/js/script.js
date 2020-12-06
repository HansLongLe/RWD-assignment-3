<<<<<<< Updated upstream
//MAKE THE MAGIC HAPPEN
=======
>>>>>>> Stashed changes
$(document).mousemove(function (event) {
    $("#net").css({
        left: event.pageX,
        top: event.pageY
    });
});

<<<<<<< Updated upstream
$("#apple1").on("click", function () {

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
>>>>>>> Stashed changes

});
