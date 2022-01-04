
// Time Complexity = O(n)
//Space Complexity = O(1)

function isPalindrome(string) {
    // Write your code here.
      let left = 0;
      let right = string.length-1;
      while(left<right){
          if(string[left]!== string[right]){
              return false;
          }
          left++;
          right--;
      }
      return true;
  }
  
 
  exports.isPalindrome = isPalindrome;