// Time Complexity : O(logn)
// space Complexity : O(1)

function binarySearch(array, target) {
    // Write your code here.
      let left = 0;
      let right = array.length-1;
      let mid;
      while(left<=right){
          mid = Math.floor((left+right)/2) ;
          if(target === array[mid]){
              return mid;
          }else if(target > array[mid]){
              left = mid +1 ;
          }else if(target < array[mid]){
              right = mid-1;
          }
      }
      return -1;
  }
  
  // Do not edit the line below.
  exports.binarySearch = binarySearch;