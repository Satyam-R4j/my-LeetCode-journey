void removeUnwantedChar(char *s)
{

    int j = 0;

    for (int i = 0; s[i] != '\0'; i++)
    {
        if (isalpha(s[i]))
        {
            s[j] = tolower(s[i]);
            j++;
        }
    }
    s[j] = '\0';
}

bool isPalindrome(char *s)
{

    removeUnwantedChar(s);
    printf("the sting is %s this\n", s);
    // AmanaplanacanalPanama

    int size_s = strlen(s);
    printf("the size of string is %d\n", size_s);
    if (s[0] == s[0])
    {
        if (s[0] == '\0' || size_s == 0)
        {
            printf("i am first who give true  \n");
            return true;
        }
        else if (size_s % 2 == 0)
        {
            if (s[0] == s[1])
            {
                printf("i am second who give true \n");
                return true;
            }
            // else if (s[0] == s[0])
            // {
            //     return true;
            // }
            else
            {
                // printf("i am cheching \n");
                return false;
            }
        }
        int mid = size_s / 2;
        int mid_1 = size_s / 2;
        int mid_2 = size_s / 2;
        for (int i = 0; i <= mid - 1; i++)
        {

            if (s[mid_1--] == s[mid_2++])
            {
                int temp_1 = mid_1;
                int temp_2 = mid_2;
                printf("i am cheching \n");
                if (mid_1 == 0)
                {
                    return true;
                }
            }
            else
            {
                return false;
            }
        }
        return true;
    }

    return NULL;
}
