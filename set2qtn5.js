function longestPrefix(prefix) {
    
    if (strings.length<0) {return "There is no common prefix among the input string." 
    }
    for (let i = 0; i < strings.length; i++) {
        const breakStrings = strings[i].split("");
        const words=[...breakStrings];
        let j=0;
       while (j<words.length) {j++
       for (let x = 0; x < breakStrings.length; x++) {
        if (words[j]===breakStrings[x]) {
        results.push
            
        }
        
       }
       }
            
        }
    }
}
let strings=['flower','flow','flew']