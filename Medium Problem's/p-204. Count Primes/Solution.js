/**
 * @param {number} n
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-204 (medium)
//Solution in JavaScript
var countPrimes = function (n)
{
    let isPrime = new Array(n + 1)
    isPrime.fill(true)
    let count = 0

    for (let i = 2; i < n; i++)
    {
        if (isPrime[i])
        {
            count++
            for (let j = i * 2; j < n; j = j + i)
            {
                isPrime[j] = false
            }
        }
    }

    return count

};

let n = 13
console.log(countPrimes(n))