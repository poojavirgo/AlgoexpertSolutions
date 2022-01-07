//Time complexity : O(N)
// Space complexity : O(1)

function caesarCipherEncryptor(string, key) {
    // Write your code here.
      //USING UNICODE APPROACH where a = 97, z=122, A= 65 ,Z=90
      
      const newArray=[];
      const newKey = key % 26;
      for(const letter of string){
          newArray.push(getNewCode(letter,newKey));		
   }
      return newArray.join('');
  }
  
  function getNewCode(letter,key){
      const code = letter.charCodeAt() + key;
      return code <=122 ? String.fromCharCode(code) : String.fromCharCode((code%122)+96);
  }
  
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;