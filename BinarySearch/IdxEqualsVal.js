
// Time Complexity : O(logn)
// space Complexity : O(1)  

function indexEqualsValue(array) {
    // Write your code here.
    let left =0;
    let right= array.length-1;
    while(left<=right){
      const idx = Math.floor((left+right)/2);
      const val= array[idx];
      if(val< idx){
        left= idx+1;
      }else if(val=== idx && idx ===0 ){
        return idx;
      }else if(val=== idx && array[idx-1] < idx-1){
        return idx;
        
      }else {
        right= idx-1;
      }
    }
    return -1;
  }
  
  // Do not edit the line below.
  exports.indexEqualsValue = indexEqualsValue;