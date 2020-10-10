const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
   let eib = 0;
   if (!matrix || !matrix.length){
     return 0;
   }else{
for(let i =0; i < matrix.length; i++){
  for(let u=0; u < matrix[i].length; u++){
    if(matrix[i][u] === '^^'){
      eib++;
    }
  }
}
return eib;
   }
/*throw new CustomError('Not implemented');*/
};
