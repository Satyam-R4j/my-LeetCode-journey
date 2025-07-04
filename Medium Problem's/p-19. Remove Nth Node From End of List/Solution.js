/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {

// };

// let head = [1,2,3,4,5], n = 2
// console.log(removeNthFromEnd(head,n));


class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}


class LinkedList
{
    constructor()
    {
        this.head = null
        this.len = 0
    }

    append(value)
    {
        const newNode = new Node(value)
        if (!this.head)
        {
            this.head = newNode
        }
        else
        {
            let current = this.head
            while (current.next)
            {
                current = current.next
            }
            current.next = newNode
        }
        this.len++
    }

    print()
    {
        let current = this.head
        let result = ''
        while (current)
        {
            result += current.value + (current.next ? " -> " : ' -> null')
            current = current.next
        }
        console.log(result);
    }

    delete(val)
    {
        if (!this.head)
        {
            console.log("List is empty!!");
            return
        }

        if (this.head.value === val)
        {
            this.head = this.head.next
            return
        }

        let prev = null
        let current = this.head
        while (current && current.value !== val)
        {
            prev = current
            current = current.next
        }

        if (!current)
        {
            console.log("Value is not found in list");
            return
        }

        prev.next = current.next
    }

    reverse()
    {
        if (!this.head)
        {
            console.log("List is empty!!");
            return
        }
        let prev = null
        let curr = this.head
        let next = null
        while (curr !== null)
        {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    removeNth(n)
    {
        let len = 0
        let curr = this.head
        while (curr !== null)
        {
            len++
            console.log(curr.value);

            curr = curr.next
        }

        // let nth = len - 2 + 1
        // console.log("this is the nth:", nth);

        // let i = 1
        let curr = this.head
        // while (i !== nth)
        // {
        //     // console.log("the node value : ",curr.value);
        //     curr = curr.next
        // }
        return len
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
let len = list.removeNth(2)
console.log("This is the len ", len);


// list.reverse(2)
// list.print()
// list.reverse()
// list.print()




