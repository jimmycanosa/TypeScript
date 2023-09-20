function convertToArray1(input) {
  return [input];
}

convertToArray1('hello'); // implicit input to type any

function convertToArray2(input: any): any[] {
  return [input.toUpperCase()];
}

convertToArray2(5); // no error here, error only during runtime

function convertToArray3(input: number): number[] {
  return [input];
}

// convertToArray3('hello'); // error if input is string
convertToArray3(5); // error if input is string

// function convertToArray4(input: number | string): string[] {
//   return [input];
// }

// convertToArray4('hello');

// traditional function syntax
function convertToArray5<T>(input: T): T[] {
  return [input];
}

convertToArray5(5);

function convertToArray6<T extends number | string>(input: T): T[] {
  return [input];
}

convertToArray6(5); // restrict type to string and number only
convertToArray6('hello'); // restrict type to string and number only
// convertToArray6(true); // restrict type to string and number only

// arrow function syntax
const convertToArray = <T>(input: T): T[] => {
  return [input];
};

convertToArray(5);

// traditional function syntax
function getIndexOfArray1<T>(array: T[], arrayItem: T) {
  return array.findIndex((item) => item === arrayItem);
}

const arr1 = [55, 99, 77];
getIndexOfArray1(arr1, 77);

// arrow function syntax
const getIndexOfArray = <T>(array: T[], arrayItem: T) => {
  return array.findIndex((item) => item === arrayItem);
};

const arr = [55, 99, 77];
getIndexOfArray(arr, 77);

// tradition function syntax
function createArrayPair1<T, K>(input1: T, input2: K): [T, K] {
  return [input1, input2];
}

createArrayPair1('hello', 10);

// convert to arrow function
const createArrayPair = <T, K>(input1: T, input2: K): [T, K] => {
  return [input1, input2];
};

createArrayPair('hello', 10);
