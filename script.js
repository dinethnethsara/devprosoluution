document.addEventListener("DOMContentLoaded", function() {
    const loadingOverlay = document.getElementById("loading-overlay");
    const content = document.getElementById("content");

    window.addEventListener("load", function() {
        loadingOverlay.style.display = "none";
        content.style.display = "block";
    });
});
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


