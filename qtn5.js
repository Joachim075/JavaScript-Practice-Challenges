// named my obj like this
let resultSorted={
    Even: [],
    Odd: [],
    Char: []
};
 
// here is my aaray
let mess=[2,'g',9.5,7,'k','1'];

//my function to sort mess
function clearMess(mess){

    //i used for..of loop and if statement
    for (const item of mess) {

    if (typeof item==='number') { 
        if (item%2===0) { resultSorted.Even.push(item)} 
         else { resultSorted.Odd.push(item);}
     }
    
    
    else if(typeof item==='string'){  resultSorted.Char.push(item);}
     }    
      
  return resultSorted
    }


let done= clearMess(mess);
console.log(done)

