/**The array and target*/
let nums=[1,2,3,4,5,6,7];
let target=13;

/**The function */
function twoSums(nums,target) {
    for (let num1 = 0; num1 < nums.length; num1++) {
        for (let num2 = num1+1; num2 < nums.length; num2++) {
            if (nums[num1]+nums[num2]===target) {
                return [ nums[num1],nums[num2]]
                
            }
        }
        
    }
    return null; /**Here i decidede to return null when no pair got */
}

/**Here i print the results */
let result= twoSums(nums,target);
console.log(result);