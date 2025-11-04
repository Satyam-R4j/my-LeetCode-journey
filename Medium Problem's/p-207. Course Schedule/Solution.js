/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//Satyam-R4j-LeetCode Problem-207 (medium)
//Solution in JavaScript
var canFinish = function (numCourses, prerequisites) {
    function dfsHelper(src, vis, recPath, prerequisites) {
        vis[src] = true;
        recPath[src] = true;
        for (let i = 0; i < prerequisites.length; i++) {
            let v = prerequisites[i][0];
            let u = prerequisites[i][1];
            if (u === src) {
                if (!vis[v]) {
                    if (dfsHelper(v, vis, recPath, prerequisites)) {
                        return true;
                    }
                } else if (recPath[v]) {
                    return true;
                }
            }
        }
        recPath[src] = false;
        return false;
    }
    let vis = [];
    let recPath = [];
    for (let i = 0; i < numCourses; i++) {
        if (!vis[i]) {
            if (dfsHelper(i, vis, recPath, prerequisites)) {
                return false;
            }
        }
    }
    return true;
};
