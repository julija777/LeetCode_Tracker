/**
 * @param {number[][]} points
 * @return {number}
 */
const minCostConnectPoints = function (points) {
  const distance = (p1, p2) => Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
  const arr = []
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const d = distance(points[i], points[j])
      arr.push([i, j, d])
    }
  }
  arr.sort((a, b) => a[2] - b[2])
  const parents = points.map((x, index) => index)
  const root = (a) => {
    while (parents[a] !== parents[parents[a]]) {
      parents[a] = parents[parents[a]]
    }
    return parents[a]
  }
  const isConnected = (a, b) => root(a) === root(b)
  const union = (a, b) => {
    const rootA = root(a)
    const rootB = root(b)
    parents[rootA] = rootB
  }
  let result = 0
  for (const [a, b, cost] of arr) {
    if (!isConnected(a, b)) {
      result += cost
      union(a, b)
    }
  }
  return result
}
