let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 3;

console.log("You paid: " + purchaseAmount);

if (customerType === "vip") {
  purchaseAmount *= 0.2;
} else if (customerType === "premium") {
  dayOfWeek === 5 || dayOfWeek === 6 ? (purchaseAmount *= 0.15) : (purchaseAmount *= 0.1);
} else if (customerType === "regular") {
  if (purchaseAmount > 100) {
    purchaseAmount *= 0.1;
  } else if (purchaseAmount >= 50 && purchaseAmount < 100) {
    purchaseAmount *= 0.05;
  }
}

console.log("Your discount is: " + purchaseAmount);
