/**
 * @param {string[]} words
 * @return {string}
 */
//Satyam-R4j-LeetCode Problem-269 (medium)
//Solution in JavaScript
var alienOrder = function (words) {
    const graph = new Map();
    const inDegree = new Map();

    for (let word of words) {
        for (let ch of word) {
            if (!graph.has(ch)) {
                graph.set(ch, new Set());
                inDegree.set(ch, 0);
            }
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];

        if (w1.length > w2.length && w1.startsWith(w2)) return "";

        for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
            if (w1[j] !== w2[j]) {
                if (!graph.get(w1[j]).has(w2[j])) {
                    graph.get(w1[j]).add(w2[j]);
                    inDegree.set(w2[j], inDegree.get(w2[j]) + 1);
                }
                break;
            }
        }
    }

    //Topological Sort
    const queue = [];
    for (let [ch, deg] of inDegree.entries()) {
        if (deg === 0) queue.push(ch);
    }
    let result = "";
    while (queue.length > 0) {
        const curr = queue.shift();
        result += curr;

        for (let neighbor of graph.get(curr)) {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }
    if (result.length !== inDegree.size) return "";
    return result;
};
