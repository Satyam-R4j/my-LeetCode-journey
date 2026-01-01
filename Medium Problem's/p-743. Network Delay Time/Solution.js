/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
//Satyam-R4j-LeetCode Problem-743 (medium)
//Solution in JavaScript
var networkDelayTime = function (times, n, k) {
    let graph = Array.from({ length: n +1 }, () => []);
    let cost = new Array(n + 1).fill(Infinity);
    let visited = new Array(n + 1).fill(false);
    cost[k] = 0;

    for (const [u, v, w] of times) {
        graph[u].push([v, w]);
    }
    for (let i = 1; i <= n; i++) {
        let u = -1;
        let minCost = Infinity;
        for (let j = 1; j <= n; j++) {
            if (!visited[j] && cost[j] < minCost) {
                minCost = cost[j];
                u = j;
            }
        }
        if (u === -1) break;
        visited[u] = true;

        for (let [v, w] of graph[u]) {
            if (!visited[v] && cost[v] > cost[u] + w) {
                cost[v] = cost[u] + w;
            }
        }
    }
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        if (cost[i] === Infinity) return -1;
        ans = Math.max(ans, cost[i]);
    }
    return ans;
};
let times = [
        [2, 1, 1],
        [2, 3, 1],
        [3, 4, 1],
    ],
    n = 4,
    k = 2;
console.log(networkDelayTime(times, n, k));
