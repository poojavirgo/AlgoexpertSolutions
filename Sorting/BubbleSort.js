// Time Comp : 0(n)
//space Comp:O(1)

function bubbleSort(array) {
    // Write your code here.
    //[5,1,4,2,8]
      let counter =0;
    let swapped = false;
    while(!swapped){
      swapped= true;
       for(let i=0;i<array.length-1-counter;i++){
         if(array[i]>array[i+1]){
           swap(i,i+1,array);
           swapped = false;
         }
      
    }
      counter++;
    }
   return array;
  }
  
  function swap(i,j,array){
    const temp= array[j];
    array[j]=array[i];
    array[i]= temp;
    
  }
  