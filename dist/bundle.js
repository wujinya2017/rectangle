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
;/* exported Rectangle,validate*/
function Rectangle(width, height) {
  var w = Number(width),
      h = Number(height);

  this.area = function() {
    return w * h;        
  };
  this.perimeter = function() {
    return 2 * (w + h);
            
  };

}

function validate(data){

  var result = {
    isOK: false,
    reason: ''
  };

  if(data === '') {
    result.reason = '不能为空！';
    return result;
  }

  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data)) {
    result.reason = '必须是数值';
    return result;
  }

  if(Number(data) < 0) {
    result.reason = '必须大于零';
    return result;
  }

  result.isOK = true;
  return result;
}
