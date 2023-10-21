function singleNumber(nums) {
    const numSet = new Set();
  
    for (const num of nums) {
      if (numSet.has(num)) {
        numSet.delete(num);
      } else {
        numSet.add(num);
      }
    }
  
    return Array.from(numSet)[0];
  }
  
  // Example usage:
  const nums = [2, 2, 1, 1, 4];
  const single = singleNumber(nums);
  console.log(single); // This will output the single element, which is 4 for the example input.
  