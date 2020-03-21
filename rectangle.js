/* global Rectangle,validate:true,$,$forkMeGH,$bszPageFooter*/
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate'),
      isPassValidate = false;




  $forkMeGH.show('https://github.com/wujinya2017/rectangle');
  $bszPageFooter.show('html');

  $width.keypress(function(e){
    var pos = e.target.selectionStart,
        con = e.target.value;

    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
      return;
    }
      
    if(e.key === 'e'){
      if(pos ===0 || con.indexOf('e')!==-1 || con.indexOf('E')!==-1){
        e.preventDefault();
        return;
      }
      if(pos ===1 || con.substring(0,1) === '-'){
        e.preventDefault();
        return;
      }
    } 
    
  });

  $height.keypress(function(e){

    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
      return;
    }
   
  });

  $width.focusout(function() {
    var result = validate($width.val());
    isPassValidate = result.isOK;
    if(!result.isOK) {
      $widthValidate.html('宽度' + result.reason);
      $width.select();
    } else {
      $widthValidate.html('');
    }
  });

  $height.focusout(function() {
    var result = validate($height.val());
    isPassValidate = result.isOK;
    if(!result.isOK) {
      $heightValidate.html('高度' + result.reason);
      $height.select();
    } else {
      $heightValidate.html('');
    }
  });

  $btnCal.click(function(){
    if(!isPassValidate) return;


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
