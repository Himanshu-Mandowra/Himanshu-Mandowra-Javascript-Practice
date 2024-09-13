// Function to count consistent strings
const countConsistentStrings = (allowed, words) => {
    // Convert the 'allowed' string to a Set for fast look-up
    const allowedSet = new Set(allowed);

    // Initialize a counter for consistent strings
    let consistentCount = 0;

    // Loop through each word in the 'words' array
    for (const word of words) {
        let isConsistent = true; // Assume the word is consistent initially

        // Check each character in the current word
        for (const char of word) {
            if (!allowedSet.has(char)) { // If character is not in the allowed set
                isConsistent = false; // Mark the word as inconsistent
                break; // No need to check further
            }
        }
        
        // Increment the count if the word is consistent
        if (isConsistent) {
            consistentCount++;
        }
    }

    // Return the total count of consistent strings
    return consistentCount;
};

// Example usage
const allowed = 'abc';
const words = ['a', 'ab', 'abc', 'ac', 'bcd'];

console.log(`Number of consistent strings: ${countConsistentStrings(allowed, words)}`);
