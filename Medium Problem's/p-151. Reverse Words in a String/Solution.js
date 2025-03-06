/**
 * @param {string} s
 * @return {string}
 */

// LeetCode  Problem - 151  medium
var reverseWords = function (s)
{
    let ans = "";
    let len = s.length
    s = s.split('').reverse().join('')
    console.log(s);

    for (let i = 0; i < s.length; i++)
    {
        let word = ""
        while (i < len && s[i] != ' ')
        {
            word += s[i]
            i++
        }

        word = word.split('').reverse().join('')
        if (word.length > 0)
        {
            ans += ' ' + word
        }
    }
    return ans.substring(1)
};

let s = "the sky is blue"
console.log(reverseWords(s));
