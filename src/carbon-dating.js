const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  let w = String(typeof (sampleActivity));
if( w === 'string' && Number(sampleActivity) > 0 && Number(sampleActivity) < 9000){

  let a = 15 / Number(sampleActivity);
  let result = Math.floor(Math.log(a) / (0.693 /5730));
  if(result > 0){
  return result;
}else{
  return false;
}
}else{
  return false;
}
};
