

// Optimal Solution using Dutch National flag algorithm ==> T-C = O(n) & S-C = O(1)
const swap = (nums, i, j) =>
{
  [nums[i], nums[j]] = [nums[j], nums[i]];
  return nums;
};

var sortColors = function (nums)
{
  let low = 0,
    mid = 0,
    high = nums.length - 1;
  while (mid <= high)
  {
    if (nums[mid] === 0)
    {
      swap(nums, mid, low);
      mid++, low++;
    } else if (nums[mid] === 1)
    {
      mid++;
    } else
    {
      swap(nums, high, mid);
      high--;
    }
  }
};

let nums = [0, 1, 1, 0, 2, 1, 2];
sortColors(nums);
console.log(nums)
