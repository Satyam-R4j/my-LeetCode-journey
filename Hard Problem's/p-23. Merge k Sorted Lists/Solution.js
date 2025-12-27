/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//Satyam-R4j-LeetCode Problem-23 (Hard)
//Solution in JavaScript
var mergeKLists = function (lists) {
    let arr = [];
    for (let head of lists) {
        while (head) {
            arr.push(head.val);
            head = head.next;
        }
    }

    arr.sort((a, b) => a - b);
    let temp = new ListNode(0);
    let curr = temp;

    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return temp.next;
};

var mergeKLists = function (lists) {
    if (lists.length === 0) return null;

    let minHeap = new MinHeap();

    for (let list of lists) {
        if (list) minHeap.push(list);
    }

    let dummy = new ListNode(0);
    let curr = dummy;

    while (!minHeap.isEmpty()) {
        let node = minHeap.pop();
        curr.next = node;
        curr = node.next;
        if (node.next) minHeap.push(node.next);
    }

    return dummy.next;
};

var mergeKLists = function (lists) {
    const heap = new MinHeap();

    for (let list of lists) {
        if (list) heap.push(list);
    }

    let dummy = new ListNode(0);
    let curr = dummy;

    while (!heap.isEmpty()) {
        let node = heap.pop();
        curr.next = node;
        curr = curr.next;

        if (node.next) heap.push(node.next);
    }

    return dummy.next;
};

// lists = [
//   1 → 4 → 5,
//   1 → 3 → 4,
//   2 → 6
// ]
