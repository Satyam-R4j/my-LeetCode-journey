/**
 * @param {string} s
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-387 (easy)
//Solution in JavaScript
var firstUniqChar = function (s)
{
    let map = new Map()
    let queue = new Array()
    let i = 1
    for (let i in s)
    {
        let ch = s[i]

        map.set(ch, (map.get(ch) || 0) + 1)

        queue.push(Number(i))
        while (queue.length > 0 && map.get(s[queue[0]]) > 1)
        {
            queue.shift()
        }
    }
    return queue.length === 0 ? -1 : queue[0]
};


let s = "level"
let ans = firstUniqChar(s)
console.log("Answer: ", ans)