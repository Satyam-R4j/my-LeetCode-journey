#include <stdio.h>
#include <stdbool.h>
#include <string.h>

// Function to swap two characters
void swap(char* a, char* b) {
    char temp = *a;
    *a = *b;
    *b = temp;
}

// A simple function to sort a string using bubble sort
void sortString(char str[]) {
    int n = strlen(str);
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (str[j] > str[j + 1]) {
                swap(&str[j], &str[j + 1]);
            }
        }
    }
}

// Function to check if two strings are anagrams
bool isAnagram(char* s, char* t) {
    // Step 1: Check if the lengths are the same
    if (strlen(s) != strlen(t)) {
        return false;
    }
    
    // Step 2: Sort both strings
    sortString(s);
    for (int i = 0; i < strlen(s); i++)
    {
        printf("%c",s[i]);
    }
    printf("\n");
    sortString(t);
    
    for (int i = 0; i < strlen(s); i++)
    {
        printf("%c",t[i]);
    }
    printf("\n");
    
    // Step 3: Compare both sorted strings
    for (int i = 0; i < strlen(s); i++) {
        if (s[i] != t[i]) {
            return false;
        }
    }
    
    return true;
}

int main() {
    char s[] = "anagram";  // First string
    char t[] = "nagaram";  // Second string
    
    if (isAnagram(s, t)) {
        printf("The strings are anagrams.\n");
    } else {
        printf("The strings are not anagrams.\n");
    }
    
    return 0;
}
