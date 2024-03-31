// Generic functions
const isValueEqualToOne = (element: number, index: number, array: number[]) => {
  return element === 1;
};
const isValueDivisbleBy2 = (
  element: number,
  index: number,
  array: number[]
) => {
  return element % 2 === 0;
};
const multipleValueBy2 = (value: number) => {
  return value * 2;
};
const sumAllElement = (accumulator: number, currentValue: number) => {
  return accumulator + currentValue;
};
const isAllBiggerThan5 = (value: number) => {
  return value > 5;
};

// #0 Static Length array
const firstFixedArray = new Array(5); // Using the Array Constructor
const secondFixedArray: (number | undefined)[] = Array.from({ length: 5 }); // Using Array Literal Syntax with undefined Values
console.log("#0 Static Array.");
console.log("firstFixedArray: ", firstFixedArray);
console.log("secondFixedArray: ", secondFixedArray);
console.log("");

// #1 Dynamic Length array
const firstDynamicArray: number[] = [1, 2, 3, 4, 5];
console.log("#1 Dynamic Array.");
console.log("firstDynamicArray: ", firstDynamicArray);
console.log("");

// #2 concat()
// - Returns a new array comprised of this array joined with other array(s) and/or value(s).
const firstArr: number[] = [1, 2, 3];
const secondArr: number[] = [4, 5, 6];
const resultArr: number[] = firstArr.concat(secondArr);
console.log(
  "#2 concat() - Returns a new array comprised of this array joined with other array(s) and/or value(s)."
);
console.log("firstArr: ", firstArr);
console.log("secondArr: ", secondArr);
console.log("resultArr: ", resultArr);
console.log("");

// #3 every()
// - Returns true if every element in this array satisfies the provided testing function.
const firstEveryArr: number[] = [1, 1, 1];
const secondEveryArr: number[] = [1, 2, 1];
console.log(
  "#3 every() - Returns true if every element in this array satisfies the provided testing function."
);
console.log("firstEveryArr: ", firstEveryArr.every(isValueEqualToOne));
console.log("secondEveryArr: ", secondEveryArr.every(isValueEqualToOne));
console.log("");

// #4 filter()
// - Creates a new array with all of the elements of this array for which the provided filtering function returns true.
const firstFilterArr: number[] = [1, 2, 3, 4];
console.log(
  "#4 filter() - Creates a new array with all of the elements of this array for which the provided filtering function returns true."
);
console.log(
  "firstFilterArr.filter: ",
  firstFilterArr.filter(isValueDivisbleBy2)
);
console.log("firstFilterArr: ", firstFilterArr);
console.log("");

// #5 foreach()
// - Calls a function for each element in the array.
const firstForeachArr: number[] = [1, 2, 3];
firstForeachArr.forEach((value) => {
  value = 9; // this wont work
});
const secondForeachArr: number[] = [1, 2, 3];
secondForeachArr.forEach((element, index, array) => {
  element = 9; // this wont work
  array[index] = 10; // work
});
console.log("#5 foreach() - Calls a function for each element in the array.");
console.log("firstForeachArr: ", firstForeachArr);
console.log("secondForeachArr: ", secondForeachArr);
console.log("");

// #6 indexOf()
// - Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
const firstIndexOfArr: number[] = [1, 2, 3];
const value = 2;
console.log(
  "#6 indexOf() - Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found."
);
console.log("firstIndexOfArr: ", firstForeachArr.indexOf(value));
console.log("");

// #7 join()
// - Joins all elements of an array into a string.
const firstJoinArr: number[] = [1, 2, 3];
console.log("#7 join() - Joins all elements of an array into a string.");
console.log("firstJoinArr: ", firstJoinArr.join(" + "));
console.log("");

// #8 lastIndexOf()
// - Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
const firstlastIndexOfArr: number[] = [3, 2, 3];
const VALUE = 3;
console.log(
  "#8 lastIndexOf() - Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found."
);
console.log("firstlastIndexOfArr: ", firstJoinArr.lastIndexOf(VALUE));
console.log("");

// #9 map()
// - Creates a new array with the results of calling a provided function on every element in this array.
const firstMapArr: number[] = [1, 2, 3];
console.log(
  "#9 map - Creates a new array with the results of calling a provided function on every element in this array."
);
console.log(
  "firstMapArr.map(multipleValueBy2): ",
  firstMapArr.map(multipleValueBy2)
);
console.log("firstMapArr: ", firstMapArr);
console.log("");

// #10 pop()
// - Removes the last element from an array and returns that element.
const firstPopArr: number[] = [1, 2, 3];
console.log(
  "#10 pop - Removes the last element from an array and returns that element."
);
console.log("firstPopArr: ", firstPopArr.pop());
console.log("firstMapArr: ", firstPopArr);
console.log("");

// #11 push()
// - Adds one or more elements to the end of an array and returns the new length of the array.
const firstPushArr: number[] = [1, 2, 3];
firstPushArr.push(...[4, 5, 6]);
console.log(
  "#11 push - Adds one or more elements to the end of an array and returns the new length of the array."
);

console.log("firstPushArr: ", firstPushArr);
console.log("");

// #12 reduce()
// - Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
const firstReduceArr: number[] = [1, 2, 3];
console.log(
  "#12 reduce() - Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value."
);

console.log(
  "firstReduceArr.reduce(sumAllElement): ",
  firstReduceArr.reduce(sumAllElement)
);
console.log("firstReduceArr: ", firstReduceArr);
console.log("");

// #13 reduceRight()
// - Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
// Skipped
// Array.reduceRight() is similar to Array.reduce(), but it starts the reduction from the end of the array towards the beginning,
// .. instead of from the beginning towards the end. It iterates over the elements of the array in reverse order,
// .. applying a callback function to each element.
console.log(
  "#13 reduceRight() - Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value."
);
console.log("");

// #14 reverse()
// - Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
const firstReverseArr = [1, 2, 3];
console.log(
  "#14 revse() - Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first."
);
console.log("firstReverseArr", firstReverseArr);
console.log("firstReverseArr.reverse()", firstReverseArr.reverse());
console.log("");

// #15 shift()
// - Removes the first element from an array and returns that element.
console.log(
  "#15 shift() - Removes the first element from an array and returns that element."
);
console.log("[1, 2, 3].shift(): ", [1, 2, 3].shift());
console.log("");

// #16 slice()
// - Extracts a section of an array and returns a new array.
console.log(
  "#16 slice() - Extracts a section of an array and returns a new array."
);
console.log("[1, 2, 3].slice(0, 3): ", [1, 2, 3].slice(0, 3));
console.log("[1, 2, 3].slice(1, 3): ", [1, 2, 3].slice(1, 3));
console.log("[1, 2, 3].slice(1, 2): ", [1, 2, 3].slice(1, 2));
console.log("");

// #17 some()
// - Returns true if at least one element in this array satisfies the provided testing function.
console.log(
  "#17 some() - Returns true if at least one element in this array satisfies the provided testing function."
);
console.log(
  "[1, 2, 3].some(isAllBiggerThan5): ",
  [1, 2, 3].some(isAllBiggerThan5)
);
console.log(
  "[1, 6, 10].some(isAllBiggerThan5): ",
  [1, 6, 10].some(isAllBiggerThan5)
);
console.log(
  "[6, 7, 8].some(isAllBiggerThan5): ",
  [6, 7, 8].some(isAllBiggerThan5)
);
console.log("");

// #18 sort()
// - Sorts the elements of an array.
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "John", age: 25 },
  { name: "Alice", age: 20 },
];

console.log("#18 sort() - Sorts the elements of an array.");
console.log("before sort: ", people);

people.sort((a, b) => {
  if (a.name !== b.name) {
    return a.name.localeCompare(b.name);
  } else {
    return a.age - b.age;
  }
});

console.log("This will sort by 'name' and 'age' in ascending order. (Below)");
console.log("after people (Sorting by Multiple Criteria): ", people);

people.sort((a, b) => {
  if (a.name !== b.name) {
    return a.name.localeCompare(b.name);
  } else {
    return b.age - a.age;
  }
});

console.log(
  "This will sort by 'name' in ascending order and sort by 'age' in descending order. (Below)"
);
console.log(
  "after people (Sorting by Multiple Criteria in Reverse Order): ",
  people
);

people.sort((a, b) => {
  if (a.name !== b.name) {
    return b.name.localeCompare(a.name);
  } else {
    return a.age - b.age;
  }
});

console.log(
  "This will sort by 'name' in descending order and 'age' in ascending order. (Below)"
);
console.log("after people (Sorting by Multiple Criteria): ", people);

people.sort((a, b) => {
  if (a.name !== b.name) {
    return b.name.localeCompare(a.name);
  } else {
    return b.age - a.age;
  }
});

console.log("This will sort by 'name' and 'age' in descending order. (Below)");
console.log(
  "after people (Sorting by Multiple Criteria in Reverse Order): ",
  people
);
console.log("");

// #19 splice()
// - Adds and/or removes elements from an array.
console.log("#19 splice() - Adds and/or removes elements from an array.");
console.log("// Remove 2 elements from array below");
const firstSpliceArr = [1, 2, 3];
console.log("before: firstSpliceArr: ", firstSpliceArr);
console.log("firstSpliceArr.splice(1, 2): ", firstSpliceArr.splice(1, 2));
console.log("after: firstSpliceArr: ", firstSpliceArr);
console.log("");

console.log("// Add 2 elements from array below");
const secondSpliceArr = [1, 2, 3];
console.log("before: secondSpliceArr: ", secondSpliceArr);
console.log(
  "secondSpliceArr.splice(2, 0, 4, 5): ",
  secondSpliceArr.splice(2, 0, 4, 5)
);
console.log("after: secondSpliceArr: ", secondSpliceArr);
console.log("");

console.log("// Replace 2 elements from array below");
const thirdSpliceArr = [1, 2, 3];
console.log("before: thirdSpliceArr: ", thirdSpliceArr);
console.log(
  "thirdSpliceArr.splice(1, 2, 4, 5): ",
  thirdSpliceArr.splice(1, 2, 4, 5)
);
console.log("after: thirdSpliceArr: ", thirdSpliceArr);
console.log("");

// #20 toString()
// - Returns a string representing the array and its elements.
console.log(
  "#20 toString() - Returns a string representing the array and its elements."
);
console.log("[1,2,3].toString(): ", [1, 2, 3].toString());
console.log("");

// #21 unshift()
// - Adds one or more elements to the front of an array and returns the new length of the array.
const firstUnshiftArr = [4, 5, 6];
console.log(
  "#21 unshift() - Adds one or more elements to the front of an array and returns the new length of the array."
);
console.log("before: firstUnshiftArr: ", firstUnshiftArr);
console.log(
  "firstUnshiftArr.unshift(): ",
  firstUnshiftArr.unshift(...[1, 2, 3])
);
console.log("after: firstUnshiftArr: ", firstUnshiftArr);
console.log("");
