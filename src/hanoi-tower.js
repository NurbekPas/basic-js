const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let sped = turnsSpeed / 3600;
  let turn = (Math.pow(2, disksNumber)) - 1;
  sped = Math.floor(turn / sped);
  /*return ``;*/
  let res  = new Object();
  res = { turns: turn, seconds: sped };
  return res ;
};
