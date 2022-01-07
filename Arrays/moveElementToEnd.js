//Move Element to End
//Time Complexity : O(N)
//Space Complexity: O(1)


function moveElementToEnd(array, toMove) {
    // Write your code here.
      let i = 0;
      let j= array.length-1;
      while(i<j){
          while(i<j && array[j]=== toMove){
              j--;
          }
          if(array[i]=== toMove){
              swap(i,j,array);
          }
          i++;
      }
      return array;
  }
  
  function swap(i,j,array){
      const temp=array[j];
      array[j]=array[i];
      array[i]=temp;
  }
  
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;