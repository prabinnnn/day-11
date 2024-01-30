function mynumber(num, rem) {
  for (let i = 1; i <= num; i++) {
    if (num % i === rem) {
      console.log("throw error");
      return; // stop the loop if an error is thrown
    }
  }
  console.log("number is valid");
}

// Example usage
let num = 15;
let rem = 2;
mynumber(num, rem);
