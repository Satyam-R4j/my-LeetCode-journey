#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct stack
{
    int size;
    int top;
    char *arr;
};

bool isEmpty(struct stack *stk)
{
    if (stk->top == -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

bool isFull(struct stack *stk)
{
    if (stk->top == stk->size - 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

void push(struct stack *stk, char data)
{
    if (isFull(stk))
    {
        printf("the stack is full");
    }
    else
    {
        stk->top++;
        stk->arr[stk->top] = data;
    }
}

int pop(struct stack *stk)
{
    if (isEmpty(stk))
    {
        return -1;
    }
    else
    {
        char data = stk->arr[stk->top];
        stk->top--;
        return data;
    }
}

bool match(char popped, char data)
{
    if (popped == '(' && data == ')')
    {
        return true;
    }else if (popped == '{' && data == '}')
    {
        return true;
    }
    else if (popped == '[' && data == ']')
    {
        return true;
    }
    else {
        return false;
    }
    
    
    
    
}

bool isValid(char *s)
{
    struct stack *sp = (struct stack *)malloc(sizeof(struct stack));
    sp->size = 10000;
    sp->top = -1;
    sp->arr = (char *)malloc(sp->size * sizeof(char));
    char popped;

    for (int i = 0; s[i] != '\0'; i++)
    {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{')
        {
            push(sp, s[i]);
        }
        else if (s[i] == ')' || s[i] == ']' || s[i] == '}')
        {
            if (isEmpty(sp))
            {
                return 0;
            }

            popped = pop(sp);
            if (!match(popped, s[i]))
            {
                return false;
            }
        }
    }
    if (isEmpty(sp))
    {
        return true;
    }
    else
    {
        return false;
    }
}

int main(int argc, char const *argv[])
{

    // char *exp = "[8+(8+{a+b})]";
    char *exp = "()";
    // char *exp = "1+3+(3*3))";

    if (isValid(exp))
    {
        printf("the parenthesis is matching");
    }
    else
    {
        printf("the parenthesis is not matching");
    }

    return 0;
}
