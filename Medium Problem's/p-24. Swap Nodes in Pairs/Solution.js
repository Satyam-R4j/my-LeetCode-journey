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

function arrayToList(arr)
{
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr)
    {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head)
{
    let result = [];
    while (head !== null)
    {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//Satyam-R4j-LeetCode Problem-24 (medium)
//Solution in JavaScript
var swapPairs = function (head)
{
    if (head === null || head.next === null) return head

    let first = head
    let sec = head.next
    let prev = null

    while (first !== null && sec !== null)
    {
        let third = sec.next

        sec.next = first
        first.next = third

        if (prev !== null)
        {
            prev.next = sec
        }
        else
        {
            head = sec
        }

        prev = first
        first = third
        if (third !== null)
        {
            sec = third.next
        }
        else
        {
            sec = null
        }
    }
    return head;
};

let head = arrayToList([1, 2, 3, 4, 5])
const swapped = swapPairs(head);
const outputArray = listToArray(swapped);
console.log(outputArray);

