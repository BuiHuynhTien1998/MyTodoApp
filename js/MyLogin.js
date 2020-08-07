$(document).ready(function () {
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#bg11").mousemove(function (e) {
    var pageX = e.pageX - $(window).width() / 2;
    var pageY = e.pageY - $(window).height() / 2;
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $("#bg11").css(
      "background-position",
      newvalueX + "px     " + newvalueY + "px"
    );
  });
});
