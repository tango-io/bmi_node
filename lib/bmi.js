var errors = require('./errors.js');

w = 0;
h = 0;
BMI = 0;
PRIME = 0;
Ideal_weight = 25;

exports.weight  = function(weight,type){
  if (type != 'k' && type != 'p'){
    return errors.error_weight();
  }
  if (type == 'p'){
    w = weight * 0.45359237; 
    return w;
  }else{
    w = weight;
    return w;
  }
}

exports.height  = function(height,type){
  if (type != 'm' && type != 'i'){
    return errors.error_height();
  }
  if (type == 'i'){
   return  h = height * 0.0254; 
  }else{
   return  h = height;
  }
}

exports.bmi = function(){
   if (h==0 && w==0){
    return errors.error_bmi();
  } 
  return BMI = (w/(h*h));
}

exports.prime = function(){
  return PRIME = ((BMI) / Ideal_weight); 
}

exports.prcnt = function(){
  return ((PRIME - 1) * 100);
}
