const reservations = {
  bob: { claimed: false },
  ted: { claimed: true },
};

const name = "dAvId";

let normalizedName = name.toLowerCase();

if (reservations[normalizedName]) {
  if (reservations[normalizedName].claimed === false) {
    console.log("Welcome " + name);
  } else if (reservations[normalizedName].claimed === true) {
    console.log("Hmm, someone already claimed this reservation.");
  }
} else {
  //   console.log("You have no reservation"); //
  reservations[normalizedName] = { claimed: [true] };
}

console.log(reservations);
