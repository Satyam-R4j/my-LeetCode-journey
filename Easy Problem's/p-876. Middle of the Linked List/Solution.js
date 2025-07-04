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
//Satyam-R4j-LeetCode Problem-876 (easy) 
//Solution in JavaScript
var middleNode = function(head) {
    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null)
    {
        slow=slow.next
        fast= fast.next.next
    }
    return slow
};

let head = [1,2,3,4,5,6]