/* exported Rectangle,validate*/
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
