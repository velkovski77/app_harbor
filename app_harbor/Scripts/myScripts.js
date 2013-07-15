$(document).ready(function () {
    $("#main").fadeIn(4000);

    $('#showslider').click(function () {
        
        $("#sliderhide").toggle('slow', function () {
            // Animation complete.
        });
    });
});