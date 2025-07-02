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
//Satyam-R4j-LeetCode Problem-206 (easy) 
//Solution in JavaScript
var reverseList = function (head)
{
    let prev = null
    let curr = head

    while (curr !== null)
    {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

let head = [1, 2, 3, 4, 5]