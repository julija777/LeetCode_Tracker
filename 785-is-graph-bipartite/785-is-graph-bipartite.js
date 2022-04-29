/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let len = graph.length, s = [], vis = new Uint8Array(len)
    for (let i = 0; i < len; i++) {
        if (vis[i]) continue
        vis[i] = 1, s.push(i)
        while (s.length) {
            let curr = s.pop(), edges = graph[curr]
            for (let j = 0; j < edges.length; j++) {
                let next = edges[j]
                if (!vis[next]) vis[next] = vis[curr] ^ 3, s.push(next)
                else if (vis[curr] === vis[next]) return false
            }
        }
    }
    return true
};