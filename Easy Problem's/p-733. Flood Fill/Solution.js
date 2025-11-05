/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
//Satyam-R4j-LeetCode Problem-733 (easy) 
//Solution in JavaScript
var floodFill = function (image, sr, sc, color) {
    function dfs(image, i, j, newColor, oldColor) {
        if (
            i < 0 ||
            j < 0 ||
            i >= image.length ||
            j >= image[0].length ||
            image[i][j] === newColor ||
            image[i][j] !== oldColor
        )
            return;

        image[i][j] = newColor;
        dfs(image, i - 1, j, newColor, oldColor); // Top
        dfs(image, i + 1, j, newColor, oldColor); // Bottom
        dfs(image, i, j - 1, newColor, oldColor); // Left
        dfs(image, i, j + 1, newColor, oldColor); //Right
    }

    dfs(image, sr, sc, color, image[sr][sc]);
    return image;
};
