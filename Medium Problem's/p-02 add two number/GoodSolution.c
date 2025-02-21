#include <stdio.h>
#include <stdlib.h>

struct ListNode
{
    int val;
    struct ListNode *next;
};

struct ListNode *createListNode(int val)
{
    struct ListNode *ListNode = (struct ListNode *)malloc(sizeof(struct ListNode));
    ListNode->val = val;
    ListNode->next = NULL;

    return ListNode;
}


struct ListNode* addTwoListNode(struct ListNode *l1, struct ListNode *l2)
{
    int carry = 0;
    int sum = 0;

    struct ListNode dummy;
    struct ListNode *current = &dummy;

    while (l1 != NULL && l2 != NULL)
    {

        int nval = ((l1 == NULL) ? 0 : l1->val);
        int pval = ((l2 == NULL) ? 0 : l2->val);
        sum = nval + pval + carry;
        carry = 0;

        carry = sum / 10;

        int newListNodeData = sum % 10;

        current->next = createListNode(newListNodeData);
        current = current->next;
        if (l1 != NULL)
        {
            l1 = l1->next;
        }
        if (l2 != NULL)
        {
            l2 = l2->next;
        }

        return dummy.next;
    }
}


//LeetCode formate

struct ListListNode* addTwoNumbers(struct ListListNode* l1, struct ListListNode* l2) {
    
}

int main(int argc, char const *argv[])
{
    struct ListNode *n1 = createListNode(2);
    struct ListNode *n2 = createListNode(4);
    struct ListNode *n3 = createListNode(3);

    struct ListNode *p1 = createListNode(5);
    struct ListNode *p2 = createListNode(6);
    struct ListNode *p3 = createListNode(4);

    n1->next = n2;
    n2->next = n3;
    n3->next = NULL;

    p1->next = p2;
    p2->next = p3;
    p3->next = NULL;

    addTwoNumer(n1, p1);

    return 0;
}
