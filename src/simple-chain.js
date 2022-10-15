const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  endString: [],

  getLength() {
   return this.endString.length
  },
  addLink(value) {
    if(arguments.length === 0) {
      this.endString.push('( )')
    }
    this.endString.push(`( ${String(value)} )`)
    return this
  },
  removeLink(position) {
    if(position > this.endString.length - 1 || !position || isNaN(position) || position === undefined || position < 0) {
      this.endString.length = 0
      throw new Error("You can't remove incorrect link!")
    }
    this.endString.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.endString.reverse()
    return this
  },
  finishChain() {
    let str = [...this.endString].join('~~')
    this.endString.length = 0
    return str
  }
};

module.exports = {
  chainMaker
};
