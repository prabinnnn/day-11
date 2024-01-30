function myinteger(num) {
  if (!Number.isinterger) {
    throw new Error("invalid number.please enter the number");
  }
  console.log("number is valid", Number);
}
try {
  myinteger(12); // Valid integer
  myinteger(2.12); // Throws an error
} catch (error) {
  console.log("Error:", error.message);
}
