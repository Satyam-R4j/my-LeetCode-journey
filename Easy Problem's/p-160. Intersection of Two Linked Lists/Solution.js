/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 🔗 Step 1: Definition for singly-linked list
function ListNode(val)
{
    this.val = val;
    this.next = null;
}

// 🔍 Step 2: Placeholder for your function
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB)
{

    let currA = headA
    let currB = headB

    let i = 0
    let j = 0

    while (currA !== null)
    {

        while (currB !== null)
        {
            if(currA.val === currB.val)
            {
                let interNode = 
            }
            
            j++
        }
        i++
    }

    return null; // Placeholder
};

// 🔧 Step 3: Helper to print linked list from a node
function printList(head)
{
    let result = [];
    while (head !== null)
    {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// 🧪 Build intersecting linked lists
function buildIntersectingLists(listA, listB, intersectVal, skipA, skipB)
{
    const dummyA = new ListNode(0);
    const dummyB = new ListNode(0);
    let currA = dummyA, currB = dummyB;

    // Build initial part of listA
    for (let i = 0; i < skipA; i++)
    {
        currA.next = new ListNode(listA[i]);
        currA = currA.next;
    }

    // Build initial part of listB
    for (let i = 0; i < skipB; i++)
    {
        currB.next = new ListNode(listB[i]);
        currB = currB.next;
    }

    // Build the common intersection part
    let intersect = null;
    for (let i = skipA; i < listA.length; i++)
    {
        const newNode = new ListNode(listA[i]);
        if (!intersect && listA[i] === intersectVal)
        {
            intersect = newNode;
        }
        currA.next = newNode;
        currA = currA.next;

        if (i - skipA === 0)
        {
            currB.next = newNode;
            currB = currB.next;
        }
    }

    return [dummyA.next, dummyB.next, intersect];
}

// Example: A = [4,1,8,4,5], B = [5,6,1,8,4,5], intersectVal = 8, skipA = 2, skipB = 3
const [headA, headB, intersectNode] = buildIntersectingLists(
    [4, 1, 8, 4, 5],
    [5, 6, 1, 8, 4, 5],
    8,
    2,
    3
);

const result = getIntersectionNode(headA, headB);

console.log("Intersection at node with value:", result ? result.val : null);

