function downloadJSAtOnload(){var e=document.createElement("script");e.src="https://cdn.rawgit.com/KompiAjaib/FileX/master/shortenurl.js",document.body.appendChild(e)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
// Related
$(document).ready(function() {$('ul#related-summary li img').attr('src', function(i, src) 
{return src.replace( 's72-c', 'w200-h135-c' );});});
