// Time Compexity : O(N)
// Space Complexity : O(1)

function firstNonRepeatingCharacter(string) {
    // Write your code here.
      const freq={};
      for(const char of string){
          if( !(char in freq)) {freq[char] = 0;}
          freq[char]++;
      }
      for(let i=0;i< string.length ;i++){
          const character = string[i];
          if(freq[character]===1) return i;
      }
    return -1;
  }
  
  // Do not edit the line below.