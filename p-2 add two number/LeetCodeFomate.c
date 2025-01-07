

#include <stdio.h>
#include <stdlib.h>
struct ListNode
{
    int val;
    struct ListNode *next;
};

struct ListNode *createNode(int val)
{
    struct ListNode *newNode = (struct ListNode *)malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
}

struct ListNode *addTwoNumbers(struct ListNode *l1, struct ListNode *l2)
{
    struct ListNode dummy;
    struct ListNode *current = &dummy;
    int carry = 0;

    dummy.next = NULL;

    while (l1 != NULL || l2 != NULL || carry != 0)
    {
        int val1 = (l1 != NULL) ? l1->val : 0;
        int val2 = (l2 != NULL) ? l2->val : 0;
        int sum = val1 + val2 + carry;

        carry = sum / 10;
        int newNodeValue = sum % 10;

        current->next = createNode(newNodeValue);
        current = current->next;

        if (l1 != NULL)
            l1 = l1->next;
        if (l2 != NULL)
            l2 = l2->next;
    }

    return dummy.next;
}
