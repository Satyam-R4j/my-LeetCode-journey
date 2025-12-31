/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-323 (medium)
//Solution in JavaScript
var countComponents = function (n, edges) {
    let graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let visited = new Set();
    function dfs(node) {
        visited.add(node);
        for (const neighbor of graph[node]) {
            if (visited.has(neighbor)) continue;
            dfs(neighbor);
        }
        return true;
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i);
            count++;
        }
    }

    return count;
};
let n = 6,
    edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [4, 5],
    ];
console.log(countComponents(n, edges));
