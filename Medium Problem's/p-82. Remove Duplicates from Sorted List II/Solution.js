function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
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
//Satyam-R4j-LeetCode Problem-82 (Medium) 
//Solution in JavaScript
var deleteDuplicates = function (head) {
    let dummy = new ListNode(0, head);
    let prev = dummy;

    while (head) {
        if (head.next && head.val === head.next.val) {
            while (head.next && head.val === head.next.val) {
                head = head.next;
            }
            prev.next = head.next;
        } else {
            prev = prev.next;
        }
        head = head.next;
    }
    return dummy.next;
};

function buildLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr.join(" -> "));
}

let input = buildLinkedList([1, 2, 3, 3, 4, 4, 5]);
console.log("Input:");
printLinkedList(input);

let output = deleteDuplicates(input);
console.log("Output:");
printLinkedList(output);
