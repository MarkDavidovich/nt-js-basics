const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: false, // choose one
  fridge: {
    price: 500,
    works: true, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "raddish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

// Helper variables
const ownerName = kitchen.owner;
const hasOven = kitchen.hasOven;
const workingFridge = kitchen.fridge.works;
const fridgePrice = kitchen.fridge.price;
const fridgeInventory = kitchen.fridge.items;

let currentFridgeItem = fridgeInventory[2]; // Choose your fridge item with this variable
let currentExpiryDate;

// These declared variables will be initialized with a string according to the status of the items
let expiryStateStr;
let fridgeStateStr;
let fridgeRepairStr;
let ovenAvailabilityStr;

// expiryStateStr initialization
// can use Math.abs() for the expiry calculations
if (currentFridgeItem.expiryDate - date > 0) {
  currentExpiryDate = currentFridgeItem.expiryDate - date;
  expiryStateStr = currentFridgeItem.name + " will expire in " + currentExpiryDate + (currentExpiryDate > 1 ? " days. " : " day. ");
} else if (currentFridgeItem.expiryDate - date < 0) {
  currentExpiryDate = date - currentFridgeItem.expiryDate;
  expiryStateStr = currentFridgeItem.name + " expired " + currentExpiryDate + (currentExpiryDate > 1 ? " days" : " day") + " ago. ";
} else {
  expiryStateStr = currentFridgeItem.name + " will expire today. ";
}

// fridgeStateStr and fridgeRepairStr initialization
if (workingFridge) {
  fridgeStateStr = "Weird, considering her fridge works. ";
  fridgeRepairStr = "";
} else {
  fridgeStateStr = "Probably because her fridge doesn't work. ";
  fridgeRepairStr = "And she'll have to pay " + fridgePrice / 2 + " to fix the fridge. ";
}

// ovenAvailabilityStr initialization
if (hasOven) {
  ovenAvailabilityStr = "Luckily, she has an oven to cook the " + currentFridgeItem.name + " in. ";
} else {
  ovenAvailabilityStr = "Too bad she doesn't have an oven to cook the " + currentFridgeItem.name + " in. ";
}

// Now to concatenate the strings to create a single string

console.log(ownerName + "'s " + expiryStateStr + fridgeStateStr + ovenAvailabilityStr + fridgeRepairStr);
