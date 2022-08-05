// Time Complexity : O(n)
// space Complexity : O(1)

function quickselect(array, k) {
    // Write your code here.
   smallestK(array,k,0,array.length-1);
  }
  
  function smallestK(array,k,start,end){
      while(true) {
      if(start>end){
          throw new Error('error');
      }
          const pivot = start;
      const left = start+1;
      const right = end;
      const pos = k-1;
      while(left<=right){
          if(array[left]<= array[pivot]){
              left++;
          }
          if(array[left] >=array[pivot]){
              right--;
          }
          if(array[left] >array[pivot] && array[right] < array[pivot]){
              swap(left,right,array);
          }
      }	
      swap(pivot,right,array);
      if(array[right]===pos){
          return array[right];
      }else if(right < pos){
          start=right+1;
      }else{
          end=right-1;
      }
  
          
      }
      
  }
  function swap(i,j,arr){
      const temp = arr[j];
      arr[j]=arr[i];
      arr[i]=temp;
  }
  
  // Do not edit the line below.
  exports.quickselect = quickselect;