/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((val, index) => index)
    this.size = new Array(n).fill(1)
    this.count = n
  }

  root(i) {
    while (this.parent[i] !== undefined && i !== this.parent[i]) {
      this.parent[i] = this.parent[this.parent[i]] // Path compression
      i = this.parent[i]
    }
    return i
  }

  connected(a, b) {
    return this.root(a) === this.root(b)
  }

  union(a, b) {
    const rootA = this.root(a)
    const rootB = this.root(b)
    if (rootA === rootB) {
      return
    }
    if (this.parent[rootA] < this.parent[rootB]) {
      this.parent[rootA] = rootB
      this.size[rootB] += this.size[rootA]
    } else {
      this.parent[rootB] = rootA
      this.size[rootA] += this.size[rootB]
    }
    this.count -= 1
  }

  getCount() {
    return this.count
  }
}
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
const smallestStringWithSwaps = function (s, pairs) {
  const result = []
  const uf = new UnionFind(s.length)
  pairs.forEach(([index1, index2]) => {
    uf.union(index1, index2)
  })
  const groups = {

  }

  for (let i = 0; i < s.length; i++) {
    const currentRoot = uf.root(i)
    if (groups[currentRoot]) {
      groups[currentRoot].add(i)
    } else {
      groups[currentRoot] = new Set([i])
    }
  }
 
  Object.values(groups).forEach((indexSet) => {
    const indexes = [...indexSet]
    const str = indexes.map(index => s[index])
    str.sort((a, b) => a.localeCompare(b))
    str.forEach((item, index) => {
      const realIndex = indexes[index]
      result[realIndex] = item
    })
  })
  return result.join('')
}