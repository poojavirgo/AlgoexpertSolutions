// Time Complexity : O(logn)
// space Complexity : O(1)

function shiftedBinarySearch(array, target) {
    // Write your code here.
      let left = 0;
      let right = array.length-1;
      let mid;
      while(left<=right){
          mid = Math.floor((left+right)/2);
          let potentialMatch= array[mid];
          if(potentialMatch === target){
              return mid;
          }else if(array[left]<=potentialMatch){
              if( target< potentialMatch && target>=array[left]){
                  right=mid-1;
              }
                  else{
                      left=mid+1;
                  }
              
              
          }else{
              if(target > potentialMatch && target <= array[right]){
                  left= mid+1;
              }else{
                  right=mid-1;
              }
              
          }
          
      }
      return -1;
  }
  
  // Do not edit the line below.
  exports.shiftedBinarySearch = shiftedBinarySearch;