document.addEventListener('DOMContentLoaded', function () {
 window.scrollTo(0, 0);

 document.addEventListener("touchmove", function(e) { e.preventDefault() });




var body = document.documentElement;
if (body.requestFullscreen) {
body.requestFullscreen();
} else if (body.webkitrequestFullscreen) {
body.webkitrequestFullscreen();
} else if (body.mozrequestFullscreen) {
body.mozrequestFullscreen();
} else if (body.msrequestFullscreen) {
body.msrequestFullscreen();
}


 });
