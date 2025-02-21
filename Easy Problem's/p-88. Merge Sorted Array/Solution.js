var merge = function (nums1, m, nums2, n)
{
    let ind = m + n - 1
    let i = m - 1, j = n - 1
    while (i >= 0 && j >= 0)
    {
        if (nums1[i] >= nums2[j])
        {
            nums1[ind--] = nums1[i--]
        }
        else
        {
            nums1[ind--] = nums2[j--]
        }
    }
    while (j >= 0)
    {
        nums1[ind--] = nums2[j--]

    }
    nums1.forEach(element => {
        console.log(element)
    });

};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
merge(nums1,m,nums2,n)