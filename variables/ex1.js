// /(5 > 2) && false // false, && requires both operands to be true.

// /!("knife" === "sword") // true, the operator === compares both value and type which is false and then ! makes it true.

// /(1 < 2) || (-1 > -1) || !false // true, || requires at least one operand to be true.

// /"" // false, an empty string is falsy.

// /(31 % 5) == "1" // true, the remainder is 1 and the == operator checks for value and converts operands to a common type.

// /!!true // true, !true is false, ! on that makes it true.

// /"5th Avenue" != "5th Avenue" // false, both of the strings are the same.

// /52 !== "52" // true, 52 is different from "52" type wise.

// /(undefined || null) // null, the || operator returns the first truthy operand, or the last operand if none are truthy.
