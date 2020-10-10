const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentChain: [],
  getLength() {
    return this.currentChain.length;
  },
  addLink(value) {
    this.currentChain.push(value === undefined ? '' : String(value));
    return this;
  },
  removeLink(position) {
    try{
      if (isNaN(position)
        || position < 1 
        || position > this.currentChain.length
        || Math.round(position) != position) throw new Error();
      this.currentChain.splice(position - 1, 1);
      return this;
    }
    catch(ex){
      this.currentChain = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    let retValue = this.currentChain.map(x => '( ' + x + ' )').join('~~');
    this.currentChain = [];
    return retValue;
  }
};

module.exports = chainMaker;
