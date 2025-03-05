/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFreqSame = function (freq1, freq2 )
{
    for (let i = 0; i < 26; i++)
    {
        if (freq1[i] !== freq2[i])
        {
            return false
        }
    }
    return true
}

var checkInclusion = function (s1, s2)
{
    if (s1.length > s2.length) return false
    let freq = [...Array(26)].map(() => 0)
    let windowSize = s1.length

    for (let i = 0; i < s1.length; i++)
    {
        freq[s1.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i <= s2.length - windowSize; i++)
    {
        let windowIdx = 0
        let idx = i
        let windowFreq = new Array(26).fill(0)

       for(let j = 0; j < windowSize; j++)
        {
            windowFreq[s2.charCodeAt(i + j) - 97]++
        }

        if (isFreqSame(freq, windowFreq))
        {
            return true
        }

    }
    return false
};

let s1 = "ab", s2 = "eidbaooo"
console.log(checkInclusion(s1, s2));
