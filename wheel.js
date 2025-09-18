// wheel.js
// Handles wheel selection logic for Team Sorting App

/**
 * Get the name from the wheel segment where the arrow lands when stopped.
 * @param {number} rotation - The current rotation (radians) of the wheel.
 * @param {string[]} nameArr - Array of names on the wheel.
 * @returns {string} - The selected name.
 */
function getSelectedWheelName(rotation, nameArr) {
    if (!nameArr || nameArr.length === 0) return null;
    // The arrow is at the top (0 radians), so calculate which segment is at the top
    const sliceAngle = 2 * Math.PI / nameArr.length;
    // Normalize rotation to [0, 2PI)
    let normalized = rotation % (2 * Math.PI);
    if (normalized < 0) normalized += 2 * Math.PI;
    // Find the index of the segment at the arrow
    let idx = Math.floor((2 * Math.PI - normalized) / sliceAngle) % nameArr.length;
    return nameArr[idx];
}

// Example usage:
// let selected = getSelectedWheelName(currentRotation, wheelNames);
// Assign selected to team, update UI, etc.

// Export for use in sort.html
if (typeof module !== 'undefined') {
    module.exports = { getSelectedWheelName };
}
