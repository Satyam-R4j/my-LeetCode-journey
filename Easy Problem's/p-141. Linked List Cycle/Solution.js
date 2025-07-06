/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val)
{
    this.val = val;
    this.next = null;
}

function createLinkedListWithCycle(arr, pos)
{
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    for (let i = 1; i < arr.length; i++)
    {
        current.next = new ListNode(arr[i]);
        current = current.next;
        if (i === pos) cycleNode = current;
    }

    if (pos === 0) cycleNode = head;

    if (cycleNode)
    {
        current.next = cycleNode;  // create the cycle
    }

    return head;
}


/**
 * @param {ListNode} head
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-141 (easy)
//Solution in JavaScript 
var hasCycle = function (head) {
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {

        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
};


let head = createLinkedListWithCycle([3, 2, 0, -4], 1);
console.log(hasCycle(head)); 
