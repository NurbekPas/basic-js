const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str , options ) {
  let sourceString = String(str);
  if (!('repeatTimes' in options) || !options['repeatTimes']) options['repeatTimes'] = 1;
  if (!('addition' in options) || options['addition'] === undefined ) 
      options['addition'] = ''; 
  else 
      options['addition'] = String(options['addition']);
  if (!('separator' in options)  || options['separator'] === undefined ) options['separator'] = '+';
  if (!('additionSeparator' in options)) options['additionSeparator'] = '|';
  if (!('additionRepeatTimes' in options) || !options['additionRepeatTimes']) options['additionRepeatTimes'] = 1;
  let retValue = [];
  if (options['repeatTimes'] > 0){
      retValue = new Array(options['repeatTimes']);
      if (options['additionRepeatTimes'] > 0 ){
          sourceString += (new Array(options['additionRepeatTimes'])).fill(options['addition']).join(options['additionSeparator']);
      }
      retValue.fill(sourceString);
  }
  return retValue.join(options['separator']);
};
  