$(document).ready(function(){
      if (window.location.hash == "#kenal") {
        $('html, body').animate({
           scrollTop: $("#kenal").offset().top
         }, 1000);
      } else if (window.location.hash == "#hitung") {
        $('html, body').animate({
           scrollTop: $("#hitung").offset().top
         }, 1000);
      } else {
        $('html, body').animate({
           scrollTop: $("#mapping").offset().top
         }, 1000);
      }

   });
