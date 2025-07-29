// Definition for singly-linked list node
function ListNode(val) {
    this.val = val;
    this.next = null;
}
//Satyam-R4j-LeetCode Problem-237 (medium)
//Solution in JavaScript
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};

// Helper: Create linked list from array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper: Print linked list
function printList(head) {
    let current = head;
    let output = [];
    while (current !== null) {
        output.push(current.val);
        current = current.next;
    }
    console.log(output.join(" -> "));
}

// Create list: 4 -> 5 -> 1 -> 9
let head = createLinkedList([4, 5, 1, 9]);

// Find node with value 1 (simulate how LeetCode gives only that node)
let nodeToDelete = head;
while (nodeToDelete && nodeToDelete.val !== 1) {
    nodeToDelete = nodeToDelete.next;
}

// Call your function
deleteNode(nodeToDelete);

// Print final list after deletion
printList(head);
