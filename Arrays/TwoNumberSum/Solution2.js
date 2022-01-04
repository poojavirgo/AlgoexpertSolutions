// Solution 2 : Two Pointer - Left/Right Algorithm -- Optimal Solution

function twoNumberSum(array,targetSum){
    let newArray =[];
    let left = 0;
    let right = array.length-1;
    while(left <right) // it will traverse only once , so O(N)
    const currentSum = array[left] + array [right];
    {
        if(currentSum === targetSum){
            newArray.push([array[left],array[right]]);
            left++;
        }else if (currentSum >targetSum){
            right--;
        }else if(currentSum < targetSum){
            left++;
        }

    }

    return newArray;
    }
    
    
    let array = [1,2,3,4,5];
    let sum =5;
    
    console.log(twoNumberSum(array,sum)); 

    // Output : [[1,4],[2,3]]
    
    // Time Complexity : O(N)
    
    //Space Complexity : O(1)