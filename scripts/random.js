/**
 * @file random.js
 * @link https://user9644.github.io/scripts/random.js
 * @description Easier Random Number Generator
 * @version v1.0
 */
class getRandom{
    /**
     * Returns a random int from min to max.
     * With one argument it returns a random int from 0 to the number
     * @param {int} min
     * @param {int} max
     * @returns {int}
     */
    static int = function(min, max){
        if(max == undefined) {
            max = min;
            min = 0;
        }
        const _random = Math.random() * (max + 1 - min);
        return Math.floor(_random) + min;
    }

    /**
     * @returns {float} A random radiant between 0 and TAU (2 PI) (~ 6.28).
     */
    static radiant = () => Math.random() * 2 * Math.PI;

    /**
     * @param {int} count Length of returned string
     * @param {boolean} useNumbers 
     * @returns {string}
     */
    static str = function(count, useNumbers){
        const strs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        const start = (useNumbers || true) ? 0 : 10;
        let str = "";

        for(let i = 0; i < count; i ++) {
            const randomInt = this.int(start, strs.length);
            
            str += strs[randomInt];
        }

        return str;
    }

    /**
     * @returns {boolean} 50% true, 50% false
     */
    static bool = () => Math.random() < 0.5;
}