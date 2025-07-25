// Write a function to validate Rubik's Cube color state.
// Input: { U: [...], R: [...], F: [...], D: [...], L: [...], B: [...] }
// - Ensure exactly 9 stickers per face
// - Ensure exactly 9 of each color across the cube
// Return true/false and optionally a list of errors
function validateCube(cube) {
    const faces = ["U", "R", "F", "D", "L", "B"];
    const errors = [];
    const colorCount = {};

    // Check each face has exactly 9 stickers
    for (const face of faces) {
        if (!Array.isArray(cube[face]) || cube[face].length !== 9) {
            console.error(`Face ${face} must have exactly 9 stickers.`);
        }
        for (const color of cube[face] || []) {
            colorCount[color] = (colorCount[color] || 0) + 1;
        }
    }

    // Check there are exactly 9 of each color
    for (const color in colorCount) {
        if (colorCount[color] !== 9) {
            console.error(`Color ${color} appears ${colorCount[color]} times (should be 9).`);
        }
    }

    // Optionally, check for missing colors
    if (Object.keys(colorCount).length !== 6) {
        console.error(
            `Cube must have exactly 6 colors, found ${
                Object.keys(colorCount).length
            }.`
        );
    }

    return {
        valid: errors.length === 0,
        errors,
    };
}

export default validateCube;
