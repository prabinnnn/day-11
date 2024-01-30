function validateInteger(number) {
  try {
    if (!Number.isInteger(number)) {
      throw new Error("Invalid number. Please input an integer.");
    }
    console.log("Number is valid:", number);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
