let p1 = {
  name: "David",
  age: "23",
  city: "New York",
};

let p2 = {
  name: "Martha",
  age: "23",
  city: "Los Angeles",
};

let conditionalPrint = p1.city === p2.city ? "" : ", but couldn't";

if (p1.age === p2.age) {
  console.log(p1.name + " wanted to date " + p2.name + conditionalPrint);
}
