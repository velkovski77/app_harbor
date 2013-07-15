function slideSwitch() {
    var $active = $('#slideshow IMG.active');
    if ($active.length == 0) $active = $('#slideshow IMG:last');
    var $next = $active.next().length ? $active.next() : $('#slideshow IMG:first');
    $active.addClass('last-active');

    $next.css({ opacity: 0.0 })
        .addClass('active')
        .animate({ opacity: 1.0 }, 1000, function () {
            $active.removeClass('active last-active');
        });
}
function previousSwitch() {
    var $active = $('#slideshow IMG.active');
    if ($active.length == 0) $active = $('#slideshow IMG:last');
    var $prev = $active.prev().length ? $active.prev() : $('#slideshow IMG:last');
    $active.addClass('last-active');

    $prev.css({ opacity: 0.0 })
    .addClass('active')
    .animate({ opacity: 1.0 }, 1000, function () {
        $active.removeClass('active last-active');
    });
}

$(function () {
    previousSwitch();
    setInterval("slideSwitch()", 7000);
    $("#prev").click(function () {
        previousSwitch();
    });
    $("#next").click(function () {
        slideSwitch();

    });
});
