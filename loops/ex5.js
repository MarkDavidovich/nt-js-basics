const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

const letters = Object.keys(dictionary);

for (let i = 0; i < letters.length; i++) {
  console.log(`Words that begin with ${letters[i]}:`);
  for (let j = 0; j < dictionary[letters[i]].length; j++) {
    console.log(dictionary[letters[i]][j]);
  }
}
