const functions = require("./password.js");

const password = "Ikben3";

test("Get word length", function () {
    expect(functions.isLessThan8Chars(password)).toBe(true)
});

test("Check if null", function () {
    expect(functions.isNotBlank(password)).toBe(true)
});

test("Check 1 or more uppercase characters", function () {
    expect(functions.hasUppercase(password)).toBe(true)
});

test("Check 1 or more lowercase characters", function () {
    expect(functions.hasLowercase(password)).toBe(true)
});
test("Check for number", function () {
    expect(functions.hasDigit(password)).toBe(true)
});

