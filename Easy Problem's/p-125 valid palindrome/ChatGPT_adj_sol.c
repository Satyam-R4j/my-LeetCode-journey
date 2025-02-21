#include <stdbool.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>

void removeUnwantedChar(char *s) {
    int j = 0;

    for (int i = 0; s[i] != '\0'; i++) {
        if (isalnum(s[i])) { // Changed to isalnum to include numbers
            s[j] = tolower(s[i]);
            j++;
        }
    }
    s[j] = '\0'; // Null-terminate the filtered string
}

bool isPalindrome(char *s) {
    removeUnwantedChar(s); // Filter the string before checking
    int size_s = strlen(s);

    if (size_s == 0) {
        return true; // An empty string is a palindrome
    }

    for (int i = 0; i < size_s / 2; i++) {
        if (s[i] != s[size_s - 1 - i]) {
            return false; // Not a palindrome
        }
    }
    return true; // It is a palindrome
}

int main() {
    char str[] = "A man, a plan, a canal: Panama";

    if (isPalindrome(str)) {
        printf("The string is a valid palindrome.\n");
    } else {
        printf("The string is not a valid palindrome.\n");
    }

    return 0;
}
