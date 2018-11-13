
<!-- Counter Post --><!-- Counter Post --><!-- Counter Post --><!-- Counter Post -->
<script src='//cdn.firebase.com/js/client/2.2.1/firebase.js' type='text/javascript'></script>
<script type='text/javascript'>
    //<![CDATA[
    $.each($(".CountPost[CountPost]"), function(a, e) {
        var l = $(e).parent().find("#CountViews").addClass("CountLoad"),
   r = $(e).parent().find("#FHPViews").addClass("LoadFHP"),
            i = new Firebase("https://counterblogpost.firebaseio.com/blogspot/CopyNime/posts/" + $(e).attr("CountPost"));
        i.once("value", function(a) {
            var n = a.val(),
                t = !1;
            null == n && (n = {}, n.value = 0, n.url = window.location.href, n.id = $(e).attr("CountPost"), n.epifhp = document.getElementById("EpiFrom").innerHTML,
   t = !0), l.removeClass("CountLoad").text(n.value), r.removeClass("LoadFHP").text(n.epifhp), n.value++, "/" != window.location.pathname && (t ? i.set(n) : i.child("value").set(n.value))
        })
    });
    //]]>
</script>
<!-- Counter Rate Post -->
<script src='//cdn.firebase.com/js/client/2.2.1/firebase.js' type='text/javascript'></script>
<script type='text/javascript'>
    //<![CDATA[
    $.each($(".RatePost[RatePost]"), function(a, e) {
        var l = $(e).parent().find("#CountRViews").addClass("CountRLoad"),
   r = $(e).parent().find("#CountRates").addClass("LoadRates"),
            i = new Firebase("https://counterblogpost.firebaseio.com/blogspot/CopyNime/rating/" + $(e).attr("RatePost"));
        i.once("value", function(a) {
            var n = a.val(),
                t = !1;
            null == n && (n = {}, n.value = 0, n.url = window.location.href, n.id = $(e).attr("RatePost"), n.rating = document.getElementById("ScoreRating").innerHTML,
   t = !0), l.removeClass("CountRLoad").text(n.value), r.removeClass("LoadRates").text(n.rating), n.value++, "/" != window.location.pathname && (t ? i.set(n) : i.child("value").set(n.value))
        })
    });
    //]]>
</script>