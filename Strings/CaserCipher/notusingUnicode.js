function caesarCipherEncryptor(string, key) {
    // Write your code here.
            const newLetters =[];
      const newKey= key%26;
          const alphabet ='abcdefghijklmnopqrstuvwxyz'.split('');
      for(const letter of string){
          newLetters.push(getNewCode(letter,newKey,alphabet));
      }
  return newLetters.join('');
      
  }
  
  function getNewCode(letter,key,alphabet){
      const newCode = alphabet.indexOf(letter) + key ;
      return alphabet[newCode % 26];
  }
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;