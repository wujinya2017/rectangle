/* global Rectangle:true*/
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  $btnCal.click(function(){
    var w = Number($width.val()),
        h = Number($height.val());

    var r = new Rectangle(w,h);
   
    $perimeter.val(roundFractional(r.perimeter(),2));
    $area.val(roundFractional(r.area(),2));
  });
});

function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
