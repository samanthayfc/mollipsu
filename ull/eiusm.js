function isXorY(channel) {
    // Check if channel satisfies condition X or Y
    return channel === 'X' || channel === 'Y';
}

function isXorYOffset(channel) {
    // Check if channel satisfies condition X offset or Y offset
    return channel === 'X_offset' || channel === 'Y_offset';
}

// Example usage in your code
let channel = 'X';
if (isXorY(channel) || isXorYOffset(channel)) {
    // This block will execute if channel is 'X', 'Y', 'X_offset', or 'Y_offset'
    console.log('Channel matches condition X or Y or X_offset or Y_offset');
} else {
    console.log('Channel does not match any condition');
}
