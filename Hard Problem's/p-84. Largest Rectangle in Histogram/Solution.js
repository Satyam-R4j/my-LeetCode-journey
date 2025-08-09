/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights)
{

    let n = heights.length
    let left = []
    let right = []
    let stack = []

    //Right smaller
    for (let i = n - 1; i >= 0; i--)
    {
        while (stack.length > 0 && heights[stack.at(-1)] >= heights[i])
        {
            stack.pop()
        }
        right[i] = stack.length === 0 ? n : stack.at(-1)
        stack.push(i)
    }

    while (stack.length !== 0)
    {
        stack.pop()
    }

    // Left smaller
    for (let i = 0; i < n; i++)
    {
        while (stack.length > 0 && heights[stack.at(-1)] >= heights[i])
        {
            stack.pop()
        }
        left[i] = stack.length === 0 ? -1 : stack.at(-1)
        stack.push(i)
    }

    let ans = 0
    for (let i = 0; i < n; i++)
    {
        let width = right[i] - left[i] - 1
        let currArea = heights[i] * width
        ans = Math.max(ans,currArea)
    }
    return ans

};

// --- Test cases ---
const tests = [
    { input: [2, 1, 5, 6, 2, 3], expected: 10 },
    { input: [2, 4], expected: 4 },
    { input: [6, 2, 5, 4, 5, 1, 6], expected: 12 },
];

tests.forEach(({ input, expected }, index) =>
{
    const result = largestRectangleArea(input);
    console.log(`Test ${index + 1}:`, result === expected ? "✅ Passed" : `❌ Failed (Got ${result}, Expected ${expected})`);
});
