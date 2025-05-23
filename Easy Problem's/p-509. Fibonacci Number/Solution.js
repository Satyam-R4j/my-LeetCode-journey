/**
 * @param {number} n
 * @return {number}
 */
// //Satyam-R4j-LeetCode Problem-509 (Easy) 
// //Solution in JavaScript with TC -> O(n), SC-> O(1)
// var fib = function(n) {

//     if(n <= 0) return 0
//     if(n === 1) return 1

//     let previous = 0
//     let current = 1

//     for(let a = 2; a <= n; a++)
//     {
//         let next = previous + current
//         previous = current
//         current = next
//     }
//     return current
// };

// //Satyam-R4j-LeetCode Problem-509 (Easy) 
// //Solution in JavaScript with TC -> O(n), SC-> O(n)
var fib = function (n)
{
    if (n === 0 || n === 1)
    {
        return n
    }

    return fib(n - 1) + fib(n - 2)
};

let n = 2
console.log(fib(n));


