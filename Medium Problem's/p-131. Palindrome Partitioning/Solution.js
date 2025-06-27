/**
 * @param {string} s
 * @return {string[][]}
 */
//Satyam-R4j-LeetCode Problem-131 (medium) 
//Solution in JavaScript with Recursion
function isPalindromic(part)
{
    return part === part.split('').reverse().join('')
}

function getAllParts(s, partitions, ans)
{
    if (s.length === 0)
    {
        ans.push([...partitions])
        return
    }
    for (let i = 0; i < s.length; i++)
    {
        let part = s.substring(0, i + 1)
        if (isPalindromic(part))
        {
            partitions.push(part)
            getAllParts(s.substring(i + 1), partitions, ans)
            partitions.pop()
        }
    }
}

var partition = function (s)
{
    let ans = []
    let partitions = []
    getAllParts(s, partitions, ans)
    return ans
};

let s = "aab"
console.log(partition(s));
