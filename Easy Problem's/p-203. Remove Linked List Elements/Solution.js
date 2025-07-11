function ListNode(val, next = null)
{
    this.val = val;
    this.next = next;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//Satyam-R4j-LeetCode Problem-203 (easy)
//Solution in JavaScript 
var removeElements = function (head, val)
{
    if (head === null) return null

    let curr = head
    let dummy  = new ListNode(0)
    let pre = dummy
    dummy.next = head

    while (curr !== null)
    {
        if ( curr.val === val)
        {   
            pre.next = curr.next
        }
        else{
            pre = curr
        }        
        curr = curr.next
    }

    return dummy.next;
};


function arrayToLinkedList(arr)
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


function linkedListToArray(head)
{
    let result = [];
    while (head !== null)
    {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

let inputArray = [1, 2, 6, 3, 4, 5, 6];
let valToRemove = 6;

let head = arrayToLinkedList(inputArray);
let updatedHead = removeElements(head, valToRemove);
let resultArray = linkedListToArray(updatedHead);

console.log("Original list:", inputArray);
console.log("Value to remove:", valToRemove);
console.log("Updated list:", resultArray);
