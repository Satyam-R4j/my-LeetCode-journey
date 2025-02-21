/**
 * @param {number[]} nums
 */

function swap(nums, a, b)
{
    [nums[a], nums[b]] = [nums[b], nums[a]]

}

var nextPermutation = function (nums)
{
    //Step 1:- Find pivot
    let pivot = -1, n = nums.length
    for (let i = n - 2; i >= 0; i--)
    {
        if (nums[i] < nums[i + 1])
        {
            pivot = i
            break
        }
    }
    if (pivot === -1)
    {
        nums.reverse()
        return nums
    }

    //Step 2:- next larger element
    for (let i = n - 1; i > pivot; i--)
    {
        if (nums[i] > nums[pivot])
        {
            swap(nums, i, pivot) 
            break
        }
    }

    //Step 3:- Reverse the rest
    let i = pivot + 1, j = n - 1
    while (i <= j)
    {
        swap(nums, i++, j--)
    }
    return nums
};


let nums = [1,1,5]


console.log(nextPermutation(nums))


