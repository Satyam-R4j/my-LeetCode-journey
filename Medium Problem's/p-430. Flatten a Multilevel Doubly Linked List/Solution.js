/**
 * @param {_Node} head
 * @return {_Node}
 */
//Satyam-R4j-LeetCode Problem-430 (medium)
//Solution in JavaScript
var flatten = function (head)
{
    if (head === null) return head

    let curr = head
    while (curr !== null)
    {
        if (curr.child !== null)
        {
            //Flatten the child node
            let nxt = curr.next
            curr.next = flatten(curr.child)
            curr.next.prev = curr
            curr.child = null

            //Find tail
            while (curr.next !== null)
            {
                curr = curr.next
            }

            //attach tail with next pointer
            if (nxt !== null)
            {
                curr.next = nxt
                nxt.prev = curr
            }
        }
        curr = curr.next
    }
    return head
};

