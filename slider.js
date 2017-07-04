$(document).ready(function() {
  var margin =0;
  var currentImage = 1;
	$("#right").click(function(){
    if (currentImage < 4) {
      margin = margin - 1000;
      $(".content").animate({"margin-left": margin+"px"});
      currentImage++;
    }

  });
  $("#left").click(function() {
    if (currentImage > 1) {
    margin = margin + 1000;
    $(".content").animate({"margin-left":margin+"px"});
    currentImage--;
}
  });
});
