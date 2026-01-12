/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
//Satyam-R4j-LeetCode Problem-143 (medium)
//Solution in JavaScript
var reorderList = function (head) {
    if (head === null || head.next === null) return;

    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let preMid = slow;
    let preCurr = slow.next;
    while (preCurr.next !== null) {
        let curr = preCurr.next;
        preCurr.next = curr.next;
        curr.next = preMid.next;
        preMid.next = curr;
    }

    let p1 = head;
    let p2 = preMid.next;
    while (p1 !== preMid) {
        preMid.next = p2.next;
        p2.next = p1.next;
        p1.next = p2;
        p1 = p2.next;
        p2 = preMid.next;
    }
};

// head = [1,2,3,4,5]
