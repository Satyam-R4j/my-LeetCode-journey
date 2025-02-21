#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <stdlib.h>

// Comparator function for qsort
int compare(const void* a, const void* b) {
    return (*(char*)a - *(char*)b);
}

// Function to check if two strings are anagrams
bool isAnagram(char* s, char* t) {
    // Step 1: Check if the lengths are the same
    if (strlen(s) != strlen(t)) {
        return false;
    }

    // Step 2: Sort both strings using qsort
    qsort(s, strlen(s), sizeof(char), compare);
    qsort(t, strlen(t), sizeof(char), compare);

    // Step 3: Compare the sorted strings
    if (strcmp(s, t) == 0) {
        return true;
    }

    return false;
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
