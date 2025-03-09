/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x)
{
    let rev = 0
    console.log(x);

    while (x != 0)
    {
        let dig = x % 10
        console.log(dig);

        rev = (rev * 10) + dig
        console.log(rev);

        x = Math.trunc(x / 10)
    }

    if (rev < -(2 ** 31) || rev > (2 ** 31)) return 0

    return rev
};

let x = 1534236469
console.log(reverse(x));
