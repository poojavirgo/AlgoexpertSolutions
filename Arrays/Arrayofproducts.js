function arrayOfProducts(array) {
    // Write your code here.
     let Result = new Array(array.length).fill(1);
  
    let left = 1;
    for(let i=0;i<array.length;i++){
      Result[i]= left;
      left *= array[i];
    }
    let right = 1;
    for(let i=array.length-1;i>=0;i--){
      Result[i] *= right;
      right *=array[i];
    }
    
    return Result;
  }
  