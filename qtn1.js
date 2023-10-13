/**Prompting user for parameters. I named them 'a' and 'b' */
let a=prompt("Enter first parameter.");
let b=prompt("Enter second parameter.");

/**Making the function */
function fizzBuzz(a,b){

    /**the length of the parameters be 'c' */
    let c=a+b;
    /**Use if statement for the flow */
    if (c%3===0) {
        return"Fizz"

    } else if(c%5===0){return"Buzz"
        
    }
    else if(c%3===0&&c%5===0){
          return"FizzBuzz"
    }
    else{return"neither Fizz nor Buzz"}
};

results= fizzBuzz(a,b);
console.log(results);
