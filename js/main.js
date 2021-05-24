$(document).ready(function(){
    $(".section-features").waypoint(function (n) {
         "down" == n ? $("nav").addClass("sticky") : $("nav").removeClass("sticky")
     });
  });


  //  mobile manu
 function openNav() {
	document.getElementById("mynav").style.width = "100%"
}
function closeNav() {
	document.getElementById("mynav").style.width = "0%"
}