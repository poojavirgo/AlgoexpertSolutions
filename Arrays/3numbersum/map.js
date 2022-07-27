function threeNumberSum(array, targetSum) {
    // Write your code here.
      //x+y+z = targetSum
      array.sort((a,b)=>a-b);
      
  let newArray=[];
  for(let i =0 ;i<array.length-2 ;i++){
  let hash={};
  for(let j =i+1;j<array.length;j++){
    const x= targetSum-(array[i]+array[j]);
     if(x in hash){
     newArray.push([array[i],x,array[j]]);
    }else{
      hash[array[j]] = true;
    }
    }
  
  }
      
      return newArray;