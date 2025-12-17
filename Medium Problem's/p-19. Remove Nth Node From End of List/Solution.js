//Satyam-R4j-LeetCode Problem-19 (medium)
//Solution in JavaScript
var removeNthFromEnd = function (head, n) {
    if (!head) return null;
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    if (length === n) {
        return head.next;
    }
    current = head;
    for (let i = 1; i < length - n; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    return head;
};
