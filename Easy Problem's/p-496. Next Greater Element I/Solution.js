class Stack
{

    constructor()
    {
        this.stack = []
    }

    push(val)
    {
        this.stack.push(val)
    }

    pop()
    {
        if (this.isEmpty())
        {
            console.log("Stack is empty!!")
            return
        }
        else
        {

            return this.stack.pop()
        }
    }

    top()
    {

        if (this.isEmpty())
        {
            console.log("Stack is empty!!")
            return
        }
        else
        {
            return this.stack[this.stack.length - 1]
        }
    }

    isEmpty()
    {
        return this.stack.length === 0
    }

    size()
    {
        return this.stack.length
    }

    print()
    {
        console.log(this.stack.join(' '));

    }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Satyam-R4j-LeetCode Problem-496 (easy)
//Solution in JavaScript
var nextGreaterElement = function (nums1, nums2)
{
    let map = new Map()
    let stack = new Stack()
    for (let i = nums2.length - 1; i >= 0; i--)
    {
        while (nums2[i] >= stack.top() && !stack.isEmpty())
        {
            stack.pop()
        }
        if(stack.isEmpty())
        {
            map.set(nums2[i],-1)
        }
        else{
            map.set(nums2[i],stack.top())
        }
        stack.push(nums2[i])
    }
    for(let i = 0; i <= nums1.length - 1; i++)
    {
        nums1[i] = map.get(nums1[i])
    }
    return nums1
};

let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
let result = console.log(nextGreaterElement(nums1, nums2));
console.log(result);
