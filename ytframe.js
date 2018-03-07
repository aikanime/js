//<![CDATA[
$(document).ready(function() {
    $('iframe[src*="youtube.com"]').wrap('<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:0 auto;width:100%"></div>');
    $('iframe[src*="youtube.com"]').css({
        "position": "absolute",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "border": "0"
    });
    $('iframe[src*="youtube.com"]').each(function() {
        $(this).attr("data-src", $(this).attr("src"));
        $(this).attr("src", "")
    });
});

function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
        }
    }
}
window.onload = init;
//]]>