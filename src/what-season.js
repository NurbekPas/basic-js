const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(inputDate) {
 if (inputDate == undefined) return 'Unable to determine the time of year!';
  if (inputDate 
      && inputDate instanceof Date
      && Object.getOwnPropertyNames(inputDate).length == 0){
    let month = inputDate.getMonth();
    if (month < 2 || month == 11){
      return 'winter';
    }
    else if (month < 5){
      return 'spring';
    }
    else if (month < 8){
      return 'summer';
    }
    else {
      return 'autumn';
    }
  }
  else{
    throw new Error();
  }
   };
