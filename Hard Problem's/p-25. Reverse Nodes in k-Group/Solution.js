function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//Satyam-R4j-LeetCode Problem-25 (Hard) 
//Solution in JavaScript
var reverseKGroup = function(head, k) {
    let temp = head
    let count = 0
    while(count < k)
    {
        if ( temp === null) return head
        temp = temp.next 
        count++
    }

    let prevNode = reverseKGroup(temp,k)

    temp = head
    count = 0
    while(count < k)
    {
        let next = temp.next
        temp.next = prevNode
        prevNode = temp
        temp = next
        count ++ 
    }
    return prevNode
};

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

let head = arrayToList([1, 2, 3, 4, 5]);
let k = 2;
let resultHead = reverseKGroup(head, k);
console.log(listToArray(resultHead));
