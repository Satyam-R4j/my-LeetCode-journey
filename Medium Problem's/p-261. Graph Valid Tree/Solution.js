/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-261 (medium)
//Solution in JavaScript
var validTree = function (n, edges) {
    if (edges.length !== n - 1) return false;

    let graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let visited = new Set();
    function dfs(node, parent) {
        visited.add(node);

        for (const neighbor of graph[node]) {
            if (neighbor === parent) continue;
            if (visited.has(neighbor)) return false;
            if (!dfs(neighbor, node)) return false;
        }
        return true;
    }
    if (!dfs(0, -1)) return false;
    if (visited.size !== n) return false;
    return true;
};
