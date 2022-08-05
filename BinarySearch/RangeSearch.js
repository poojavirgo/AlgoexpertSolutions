
// Time Complexity : O(logn)
// space Complexity : O(1)  

function searchForRange(array, target) {
    // Write your code here.
      const final=[-1,-1];
      firstRangeValue(array,target,0,array.length-1,final,true);
      firstRangeValue(array,target,0,array.length-1,final,false);
      return final;
  }
  
  function firstRangeValue(array,target,left,right,final,goLeft){
      while(left<=right){
          const mid = Math.floor((left+right)/2);
          if(array[mid]<target){
              left =  mid+1;
          }else if(array[mid]>target){
              right = mid-1;
          }else{
              if(goLeft){
                  if(mid===0 || array[mid-1] !== target){
                      final[0]=mid;
                      return;
                  }else{
                      right= mid-1;
                  }
                      
              }else{
                          if(mid===array.length-1 || array[mid+1] !== target){
                      final[1]=mid;
                      return;
                  }else{
                      left= mid+1;
                  }
              }
          }
      }
      
  }