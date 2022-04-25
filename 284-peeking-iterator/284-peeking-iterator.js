/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    this.iterator = iterator
	this.end = false  // if it's the end, operation update_pointer_to_next_element will fix it. 
	this.pointer = null
	
	this.update_pointer_to_next_element()
};


/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  if(this.end) throw new Error("No more element")
    
  return this.pointer
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  if(this.end) throw new Error("No more element")

  const value = this.pointer 
  this.update_pointer_to_next_element()
  return value
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    return !this.end
};

/**
* The actual wrapper around the original iterator
* With two pieces of information together, we has the original next() prefetched in pointer and end is marked
* Note: This shall be a private function for PeekingIterator, I put it here to make the solution easily to be understood
*/
PeekingIterator.prototype.update_pointer_to_next_element = function() {
  if(this.iterator.hasNext()) {
      this.pointer = this.iterator.next()
  }else {
      this.end = true
  }
}
