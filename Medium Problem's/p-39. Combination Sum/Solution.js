/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-39 (medium)
//Solution in JavaScript
function getAllCombination(arr, i, target, ans, combin, st)
{
    if (i > arr.length || target < 0)
    {
        return
    }

    if (target === 0)
    {
        let key = combin.slice().sort((a, b) => a - b).toString()
        if (!st.has(key))
        {
            ans.push([...combin])
            st.add(key)
        }
        return
    }

    if (i >= arr.length) return

    combin.push(arr[i])
    // Single Choice 
    getAllCombination(arr, i + 1, target - arr[i], ans, combin, st)

    // Multiple Choice
    getAllCombination(arr, i, target - arr[i], ans, combin, st)

    // Backtracing
    combin.pop()

    //Exclusion
    getAllCombination(arr, i + 1, target, ans, combin, st)
}
var combinationSum = function (arr, target)
{

    let ans = []
    let combin = []
    let st = new Set()

    getAllCombination(arr, 0, target, ans, combin, st)
    return ans
};

let arr = [2, 3, 6, 7], target = 7
console.log(combinationSum(arr, target));
