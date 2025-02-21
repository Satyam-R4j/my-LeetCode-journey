#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// Define a hash table structure (set)
typedef struct {
    int *table;
    int size;
} HashSet;

// Create a hash set
HashSet* createHashSet(int size) {
    HashSet* set = (HashSet*)malloc(sizeof(HashSet));
    set->table = (int*)calloc(size, sizeof(int));
    set->size = size;
    return set;
}

// Simple hash function (modulo based)
int hash(int value, int size) {
    return abs(value) % size;
}

// Insert element into the hash set
bool insert(HashSet* set, int value) {
    int index = hash(value, set->size);
    
    // Linear probing for collision handling
    while (set->table[index] != 0) {
        if (set->table[index] == value) {
            return true;  // Duplicate found
        }
        index = (index + 1) % set->size;
    }
    
    set->table[index] = value;
    return false;
}

// Free the allocated memory for hash set
void freeHashSet(HashSet* set) {
    free(set->table);
    free(set);
}

// Function to check if array contains duplicates
bool containsDuplicate(int* nums, int numsSize) {
    if (numsSize <= 1) return false;  // No duplicates possible if array has 0 or 1 element
    
    HashSet* set = createHashSet(numsSize * 2);  // Create hash set of size 2x array size
    
    for (int i = 0; i < numsSize; i++) {
        if (insert(set, nums[i])) {
            freeHashSet(set);
            return true;  // Duplicate found
        }
    }
    
    freeHashSet(set);
    return false;  // No duplicates found
}

int main() {
    int nums[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 1};  // Example input
    int size = sizeof(nums) / sizeof(nums[0]);
    
    if (containsDuplicate(nums, size)) {
        printf("Contains Duplicate\n");
    } else {
        printf("No Duplicate\n");
    }

    return 0;
}
