function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  const words = message.split(" ");
  const wordsAmount = words.length - 1;
  const price = wordsAmount * pricePerWord;
  return price;

  // Change code above this line
}
console.log(words);
