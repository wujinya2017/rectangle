$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  $btnCal.click(function(){
    var w = Number($width.val()),
        h = Number($height.val());

    var p = 2*(w+h),
        a = w*h;
    
   // var p1 = Math.round(p*Math.pow(10,1)) / Math.pow(10,1),
    //    a2 = Math.round(a*Math.pow(10,1)) / Math.pow(10,1);
    var p1,a1;
    function roundFractional(p, 1) {
      return p1 =  Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
      
    }
    function roundFractional(a, 1) {
      return a1 =  Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

    }
  
    
    $perimeter.val(p1);
    $area.val(a1);
  });
});
