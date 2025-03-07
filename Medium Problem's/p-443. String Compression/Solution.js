/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars)
{
    let size = chars.length
    let idx = 0

    for (let i = 0; i < size; i++)
    {
        let ch = chars[i]
        let count = 0

        while (i < size && chars[i] === ch)
        {
            count++, i++
        }

        i--
        chars[idx++] = ch;

        if (count > 1)
        {

            let str = count.toString()
            for (let digit of str)
            {
                chars[idx++] = digit
            }
        }

    }
    chars.length = idx
    return idx
};


let chars = ["a", "a", "b", "b", "c", "c", "c"]
console.log(compress(chars.join('')));
