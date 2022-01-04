//Solution 3 : Hash Table / Set Algorithm--> Optimal Solution

// Using logic --> x+y = targetSum

function twoNumberSum(array,targetSum){
    let newArray =[];
     let  hash={};
     for(let y of array){ //--> O(N)
         const x = targetSum - y;
         if(x in hash){
             newArray.push([array[y],array[x]]);
         }else{
             hash[array[y]]=== true;// ---> Space O(N)
         }
     }
    return newArray;
    }
    
    
    let array = [1,2,3,4,5];
    let sum =5;
    
    console.log(twoNumberSum(array,sum)); 

    // Output : [[1,4],[2,3]]
    
    // Time Complexity : O(N)
    
    //Space Complexity : O(N)