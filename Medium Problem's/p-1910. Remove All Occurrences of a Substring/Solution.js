/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part)
{

    while (s.includes(part))
    {
        let index = s.indexOf(part)
        console.log(index);
        
        s = s.substring(0, index) + s.substring(index + part.length);
        console.log(s);
        
    }

    return s

};

let s = "abcccabcabc"
let part = "abc"
console.log(removeOccurrences(s, part));
