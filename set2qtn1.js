function addDigits(num) {
    while (num >= 10) {
      //i changed to sting then splited maped and finally reduced
      num = num.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return num;
  }

  const num = 12345;
  const result = addDigits(num);
  console.log(result); 