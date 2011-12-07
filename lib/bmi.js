//Error module
var errors = require('./errors.js');

//Variables
w = 0;
h = 0;
BMI = 0;
PRIME = 0;
Ideal_weight = 25;

//Function: Captures weight
exports.weight  = function(weight,type){
  if (type != 'k' && type != 'p'){
    return errors.error_weight();
  }

  if (type == 'p'){
    return w = weight * 0.45359237; 
  }else{ return w = weight;}
}

//Function: Captures height
exports.height  = function(height,type){
  if (type != 'm' && type != 'i'){
    return errors.error_height();
  }

  if (type == 'i'){
   return  h = height * 0.0254; 
  }else{ return  h = height;}

}

//Function: Calculates bmi
exports.bmi = function(){
   if (h==0 && w==0){ return errors.error_bmi();
  }else{ return BMI = (w/(h*h));}
}

//Function: Calculates prime
exports.prime = function(){
  if(BMI==0){ return errors.error_prime();
  } else {return PRIME = ((BMI) / Ideal_weight);} 
}

//Function: Calculates %
exports.prcnt = function(){
  if(PRIME==0){ return errors.error_prcnt();
  }else { return ((PRIME - 1) * 100);}
}

//Function: returns case
exports.cases = function(){
  if (BMI < 18.5){
    return "Underweight";
  }
  if (BMI > 18.5 && BMI <= 25 ){
    return "Normal";
  }
  if (BMI > 25 && BMI <= 30){
    return "Overweight";
  }
  if (BMI > 30 && BMI <= 35){
   return "Obese Class I";
  }
  if (BMI > 35 && BMI <= 40){
    return "Obese Class II";
  }
  if (BMI > 40){
    return "Obese Class III";
  }
}
