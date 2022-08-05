// Time Complexity : O(n)
// space Complexity : O(1)

function findThreeLargestNumbers(array) {
    // Write your code here.
      const newArray=[null,null,null];
      
      for(const num of array){
          updateArray(newArray,num);
      }
      return newArray;
  }
  
  function updateArray(newArray,num){
      if(newArray[2]=== null || num > newArray[2]){
          shiftArray(newArray,num,2);
      }	else if(newArray[1]=== null || num > newArray[1]){
          shiftArray(newArray,num,1);
      }
      else if(newArray[0]=== null || num > newArray[0]){
          shiftArray(newArray,num,0);
      }
  }
  
  function shiftArray(array,num,idx){
      for(let i=0;i<=idx;i++){
          if(i===idx){
              array[idx] = num;
          }else{
              array[i]=array[i+1];
          }
      }
  }
  
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  