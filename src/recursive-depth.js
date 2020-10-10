const CustomError = require("../extensions/custom-error");


module.exports = class DepthCalculator {
  maxDepth = 0;
  currentLevel = 0;
  calculateDepth(arr, isInternalRun) {
      if (!isInternalRun){
          this.maxDepth = 0;
          this.currentLevel = 0;
      } 
      if (arr instanceof Array){
          this.currentLevel += 1;
          arr.forEach(x => {
              if (x instanceof Array){
                   this.calculateDepth(x, true);
              }
          });
          if (this.currentLevel > this.maxDepth) this.maxDepth = this.currentLevel;
          this.currentLevel -= 1;
      }
      return this.maxDepth;
  }
};