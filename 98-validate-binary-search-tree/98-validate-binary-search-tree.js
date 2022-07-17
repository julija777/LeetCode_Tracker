/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//with help of this video https://www.youtube.com/watch?v=_oQSD9sBU8I

 var isValidBST = function(root) {
    const isValid = (node, left, right) => {
        if (node === null) return true;
        if (left !== null && node.val <= left.val) return false;
        if (right !== null && node.val >= right.val) return false;
        return isValid(node.left, left, node) && isValid(node.right, node, right);
    }
    return isValid(root, null, null);



};

