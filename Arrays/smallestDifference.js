function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      arrayOne.sort((a,b)=>a-b);// 0(N Log N)
      arrayTwo.sort((a,b)=>a-b);// 0(M Log M)
      let i=0;
      let j=0;
      let smallest = Infinity;
      let current = Infinity;
      let newArray=[];
      
      while(i<arrayOne.length && j < arrayTwo.length){
          let firstNum = arrayOne[i];
          let secondNum = arrayTwo[j];
           if(firstNum < secondNum){
               current = secondNum - firstNum;
               i++;
               
           }else if(secondNum < firstNum){
               current = firstNum - secondNum;
        j++;
           }else{
               return [firstNum, secondNum];
           }
          if(smallest > current){
              smallest = current;
              newArray= [firstNum,secondNum];
          }
      }
      return newArray;
  }
  
  // Do not edit the line below.
  exports.smallestDifference = smallestDifference;