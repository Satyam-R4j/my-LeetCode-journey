/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
#include <stdio.h>
#include <stdlib.h>
struct ListNode
{
    int val;
    struct ListNode *next;
};

void printNode(struct ListNode *list)
{
    while (list != NULL)
    {
        printf(" %d ", list->val);
        list = list->next;
    }
}
struct ListNode *createNode(int val)
{
    struct ListNode *node = (struct ListNode *)malloc(sizeof(struct ListNode));
    node->val = val;
    node->next = NULL;
    return node;
}



//LeetCode formate Solution
struct ListNode *mergeTwoLists(struct ListNode *list1, struct ListNode *list2)
{
    struct ListNode *dummy = (struct ListNode *)malloc(sizeof(struct ListNode));
    dummy->val = -1;
    dummy->next = NULL;
    struct ListNode *current = dummy;

    while (list1 != NULL && list2 != NULL)
    {
        if (list1->val <= list2->val)
        {

            current->next = list1;
            list1 = list1->next;
        }
        else
        {
            current->next = list2;
            list2 = list2->next;
        }

        current = current->next;
    }
    if (list1 != NULL)
    {
        current->next = list1;
    }
    else{
        current->next = list2;
    }

    struct ListNode* result = dummy->next;
    free(dummy);
    return result;
}

int main(int argc, char const *argv[])
{
    struct ListNode *l1 = createNode(1);
    struct ListNode *l2 = createNode(2);
    struct ListNode *l3 = createNode(4);

    l1->next = l2;
    l2->next = l3;
    l3->next = NULL;

    struct ListNode *n1 = createNode(1);
    struct ListNode *n2 = createNode(3);
    struct ListNode *n3 = createNode(4);

    n1->next = n2;
    n2->next = n3;
    n3->next = NULL;

    // printNode(l1);

    struct ListNode *merge =  mergeTwoLists(l1, n1);
    printNode(merge);

    return 0;
}
