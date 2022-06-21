
// Time Complexity :O(n)
//Space Compelxity :O(1)

function subarraySort(array) {
    // Write your code here.
    let min= Infinity;
    let max= -Infinity;
    for (let i= 0; i < array.length; i++) {
      const num=array[i];
       if(isOrder(i,num,array)){
         min= Math.min(min,num);
         max=Math.max(max,num);
      }
    }
    if(min===Infinity){
      return [-1,-1];
    }
  
    let left =0;
    while(min>=array[left]){
      left++;
    }
    let right = array.length-1;
    while(max<=array[right]){
      right--;
    }
  
    return [left,right];
  }
  
  function isOrder(i,num,array){
    if(i===0) return num > array[i+1];
    if(i=== array.length-1) return num <array[i-1];
    return num>array[i+1] || num<array[i-1];
    
  }
  
  // Do not edit the line below.
  exports.subarraySort = subarraySort;