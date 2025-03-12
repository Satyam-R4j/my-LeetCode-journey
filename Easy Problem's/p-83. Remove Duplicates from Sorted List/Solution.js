/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next)
{
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function createLL(arr)
{
    if (arr.length === 0) return null
    let head = new ListNode(arr[0],)
    let current = head

    for (let i = 1; i < arr.length; i++)
    {
        current.next = new ListNode(arr[i])
        current = current.next
    }
    return head
}

function LLtoArray(head)
{
    let result = []
    let current = head
    while (current)
    {
        result.push(current.val)
        current = current.next
    }
    return result
}
// Satyam-R4j-LeetCode Problem-83 (easy) Solution 
// in JavaScript
var deleteDuplicates = function (head)
{
    let current = head
    while (current && current.next)
    {
        if (current.val === current.next.val)
        {
            current.next = current.next.next
        }
        else
        {
            current = current.next
        }
    }
    return head
};

let head = createLL([1, 1, 2, 3, 3])
head = deleteDuplicates(head)
console.log(LLtoArray(head));
