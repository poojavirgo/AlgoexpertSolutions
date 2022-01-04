// Solution 1 : Brute Force Algorithm

function twoNumberSum(array,targetSum){
let newArray =[];
for(let i=0;i<array.length-1;i++){ // for i , it traverses from 1 to n elements , running O(N)
    for(let j=i+1;j<array.length;j++){ //for j, it traverses from i+1 to n elements , running O(N). So, total time complexity will be O(N) * O(N)= O(N^2)
   if(array[i]+ array[j]=== targetSum){
       newArray.push([array[i],array[j]]);
   }
    }
}
return newArray;
}


let array = [1,2,3,4,5];
let sum =5;

console.log(twoNumberSum(array,sum));

// Output : [[1,4],[2,3]]
    
// Time Complexity : O(N^2)

//Space Complexity : O(1)


