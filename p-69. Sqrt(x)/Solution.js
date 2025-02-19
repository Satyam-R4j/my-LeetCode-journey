
var mySqrt = function (x)
{
    if (x == 0)
    {
        return 0
    }
    else if (x == 1)
    {
        return 1
    }
    let start = 0, end = x, ans = 0

    while (start <= end)
    {
        let mid = Math.floor(start + (end - start) / 2)
        if (Math.pow(mid, 2) == x)
        {
            return mid
        }
        else if (Math.pow(mid, 2) > x)
        {
            end = mid - 1
        }
        else 
        {
            ans = mid
            start = mid + 1
        }
    }
    return ans
};


let x = 36
console.log(mySqrt(x))

