$(document).ready(function() {
  var margin =0;
  var currentImage = 1;
  $("#right").click(function(){
    $("#left").show();
    if (currentImage < 4) {
      margin = margin - 1000;
      $(".content").animate({"margin-left": margin+"px"});
      currentImage++;
      if (currentImage == 4) {
        $(this).hide();
      }
    }
  });
  $("#left").click(function() {

    if (currentImage > 1) {
      $("#right").show();
      margin = margin + 1000;
      $(".content").animate({"margin-left":margin+"px"});
      currentImage--;
      if (currentImage ==1) {
        $(this).hide();
      }
    }
  });
});
