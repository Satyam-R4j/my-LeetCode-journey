#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *createNode(int data)
{
    struct node *node = (struct node *)malloc(sizeof(struct node));
    node->data = data;
    node->next = NULL;

    return node;
}

void addTwoNumer(struct node *nRoot, struct node *pRoot)
{
    int sum = 0;
    int carry = 0;
    int newSum = 0;
    int capacity = 2;
    // int size = 0; // Initial capacity

    // int *result = (int*)malloc(capacity * sizeof(int));
    int result[3];
    int i = 0;
    while (nRoot != NULL && pRoot != NULL)
    {
        // if (nRoot == NULL)
        // {
        //     nRoot->data = 0;
        // }
        // if (pRoot == NULL)
        // {
        //     pRoot->data = 0;
        // }

        sum = nRoot->data + pRoot->data + carry;
        printf("debug sum is %d\n", sum);
        carry = 0;
        if (sum >= 10)
        {
            printf("the i is %d\n", i);
            carry = sum / 10;
            printf("if debug carry is %d\n", carry);
            newSum = sum % 10;
            printf("if debug sum is %d\n", sum);

            result[i++] = newSum;
            newSum = 0;
            printf("iam result %d\n", result[i]);
            sum = 0;
        }
        else
        {
            printf("the i is %d\n", i);

            newSum = sum % 10;
            printf("else debug sum is %d\n", sum);
            carry = 0;
            printf("else debug carry is %d\n", carry);

            result[i++] = newSum;
            newSum = 0;
            printf("iam result %d\n", result[i]);
            sum = 0;
        }
        nRoot = nRoot->next;
        pRoot = pRoot->next;
    }
    // printf("the sum is %d", sum);
    int size = sizeof(result) / sizeof(result[0]);
    printf("the size of result is %d\n", size);
    for (int i = 0; i < 3; i++)
    {
        printf("%d", result[i]);
    }
}

void addTwoNode(struct node *nRoot, struct node *pRoot)
{
    int carry = 0;
    int sum = 0;

    struct node dummy;
    struct node *current = &dummy;

    while (nRoot != NULL && pRoot != NULL)
    {

        int nData = ((nRoot == NULL) ? 0 : nRoot->data);
        int pData = ((pRoot == NULL) ? 0 : pRoot->data);
        sum = nData + pData + carry;
        carry = 0;

        carry = sum / 10;

        int newNodeData = sum % 10;

        current->next = createNode(newNodeData);
        current = current->next;
        if (nRoot != NULL)
        {
            nRoot = nRoot->next;
        }
        if (pRoot != NULL)
        {
            pRoot = pRoot->next;
        }

        return dummy.next;
    }
}

int main(int argc, char const *argv[])
{
    struct node *n1 = createNode(2);
    struct node *n2 = createNode(4);
    struct node *n3 = createNode(3);

    struct node *p1 = createNode(5);
    struct node *p2 = createNode(6);
    struct node *p3 = createNode(4);

    n1->next = n2;
    n2->next = n3;
    n3->next = NULL;

    p1->next = p2;
    p2->next = p3;
    p3->next = NULL;

    addTwoNumer(n1, p1);

    return 0;
}
