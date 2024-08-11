/**
 * @file mpf.js
 * @link https://user9644.github.io/scripts/mpf.js
 * @description More Prototype Functions
 * @version v1.0
 */

/**
 * @returns {any}
 */
Array.prototype.getRandom = function(){
    const random = Math.floor(Math.random() * this.length);
    return this[random];
}

Array.prototype.removeRandom = function(){
    random = Math.floor(Math.random() * this.length);
    return this.splice(random, 1)[0];
}

String.prototype.addStr = function(index, add) {
    const newString = this.substring(0, index) + add + this.substring(index);
    return newString;
}

String.prototype.replaceAt = function(index, replacement) {
    const newString = this.substring(0, index) + replacement + this.substring(index + replacement.length);
    return newString;
}