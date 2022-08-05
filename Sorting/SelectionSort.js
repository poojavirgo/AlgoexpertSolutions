function selectionSort(array) {
    // Write your code here.
    //1. To find smallest among unsorted array
    //2. swap with the begin element
    //3. this will create two list sorted and unsorted list
  
    for(let i=0;i<array.length-1;i++){
      let small = i;
      for(let j=i+1;j<array.length;j++){
        if(array[small]>array[j]){
          small=j;
        }
      }
      swap(i,small,array)
    }
    return array;
    
  }
  function swap(i,j,array){
    const temp = array[j];
    array[j]=array[i];
    array[i]=temp;
  }
  // Do n