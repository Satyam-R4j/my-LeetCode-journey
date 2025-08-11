/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next)
{
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//Satyam-R4j-LeetCode Problem-61 (medium)
//Solution in JavaScript
var rotateRight = function (head, k)
{
    if (head === null) return null
    if (head.next === null) return head

    let nCurr = head
    let n = 0
    while (nCurr !== null)
    {
        n++
        nCurr = nCurr.next
    }

    k = k % n

    for (let i = 1; i <= k; i++)
    {
        let curr = head
        let i = 0
        let pre = null
        while (curr.next !== null)
        {
            pre = curr
            curr = curr.next
        }

        curr.next = head
        pre.next = null
        head = curr
    }
    return head
};

function createLinkedList(arr)
{
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr)
    {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head)
{
    let result = [];
    while (head)
    {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

let headArray = [1, 2, 3, 4, 5];
let k = 2000000000;
let head = createLinkedList(headArray);
let rotated = rotateRight(head, k);
printLinkedList(rotated);
