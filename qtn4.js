    function firstPalindrome(words) {
        for (let word of words) {
    
            // i reversed  word split it to an array reversed its order as an array then joined it as a string. 
          const reversedWord = word.split('').reverse().join(''); 
      
          if (word === reversedWord) {
            return word;
          }
        }
        return "";
      }
      
      // here is my arayy with level up with kanzu code foundation.
      const words = ["level","up","with", "kanzu", "code", "foundation"];
      const result = firstPalindrome(words);
      
      console.log(result);