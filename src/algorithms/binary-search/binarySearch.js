import { Comparator } from "../../utils/compartor/Comparator";

/**
 * Binary search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number}
 * @example binarySearch([-35, -23, -8, 0, 10, 12, 14, 17, 22, 55, 102], 10)
 *   At first iteration
 *     endIndex = 10
 *     middleIndex = 5;
 *     sortedArray[middleIndex] = 12 
 * 
 *     If `sortedArray[middleIndex]` less than value of the `element` go to RIGHT
 *       startIndex = 6
 *       endIndex = 10
 *       next iteration values = [14, 17, 22, 55, 102]
 * 
 *     If `sortedArray[middleIndex]` less than value of the `element` go to RIGHT
 *       startIndex = 0
 *       endIndex = 4
 *       next iteration values = [-35, 17, 22, 55, 10]
 *   Repeat process  
 */
export function binarySearch(sortedArray, element, comparatorCallback) {
  const compartor = new Comparator(comparatorCallback);

  // Indeces contains boundries of current sub-array
  let startIndex = 0;
  let endIndex = sortedArray.length - 1; // 10

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2); // 5

    if (compartor.equal(sortedArray[middleIndex], element)) {
      return middleIndex; // e.g. sortedArray[middleIndex] = 12
    }

    // Decide which half to choose for seeking next: left or right one
    if (compartor.lessThan(sortedArray[middleIndex], element)) {
      startIndex = middleIndex + 1; // e.g. at index 6
    } else {
      // Go to the left half of the array.
      endIndex = middleIndex - 1; // e.g at index 4
    }
  }

  // Return -1 if we have not found anything.
  return -1;
}
