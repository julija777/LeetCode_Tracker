/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    let adj = [];
    let length = heights[0].length;
    let max = 0;
    
    let pushIfExists = (i, j, arr, parent) => {
        if (i >= 0 && i < heights.length && j >= 0 && j < length) {
            let ind = i * length + j;
            let delta = Math.abs(parent - heights[i][j]);
            max = Math.max(max, delta);
            arr.push([ind, delta]);
        }
    }
    
	// build adjacency list
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            let ind = i * length + j;
            let arr = [];
            
            pushIfExists(i - 1, j, arr, heights[i][j]);
            pushIfExists(i + 1, j, arr, heights[i][j]);
            pushIfExists(i, j + 1, arr, heights[i][j]);
            pushIfExists(i, j - 1, arr, heights[i][j]);
            
            adj[ind] = arr;
        }
    }
    
    // DFS
    let checkSolution = threshold => {
        let visited = new Array(adj.length);
        let stack = [adj[0]];
        visited[0] = true;
        while(stack.length) {
            let children = stack.pop();
            for (let i = 0; i < children.length; i++){
                let [ind, effort] = children[i];
                if (!visited[ind] && effort <= threshold) {
                    if (ind === adj.length - 1) return true;
                    visited[ind] = true;
                    stack.push(adj[ind]);
                }
            }
        }
        return false;
    }
    
    let lo = 0;
    let hi = max;
    
    // Binary search
    while (lo < hi) {
        let med = Math.floor((hi + lo)/2);
        let works = checkSolution(med);
        if (!works) {
            lo = med + 1;
        } else {
            hi = med;
        }
    }
    return lo;
};