// .map(), .forEach(), .filter(), .find(), .sort()

// 1. .map()

// let array = [1,2,3,4,5];
// let newArray = [];

// for (let i = 0; i<array.length; i++){
//     newArray[i] = array[i] * array[i];
// }

// console.log(newArray);

let array = [1,2,3,4,5];

// function functionForMap(element){
//     return element * element;
// }
// let newArray = array.map(functionForMap);
// console.log(newArray);

let newArray = array.map((element, index)=>{
    console.log(index);
    return element * element;
});
console.log(newArray);

// 2. .forEach()

let array2= [1,2,3,4,5]
array2.forEach((element, index)=> {
    element *= element;
    console.log(element);
});
console.log("Array is: ", array2);

// 3. .filter()

let array3 = [10,20,30,40,50];
let newArray3 = array3.filter((element)=> element >= 30);
console.log(newArray3);

// 4. .find()

let array4 = [10, 20, 30, 40, 50];
let temp = array4.findIndex((value) => {
    return value < 0;
});

console.log(temp);

// 5. .sort()

let array5 = [50, 30, 40, 10, 20];
let sortedArray = array5.sort();
console.log(sortedArray);

// Object Destructuring in 35 Objects 

let details = {
    name: "Alex",
    age:24,
    address: {
        street: "Brooklyn",
        city: "New York",
        state: "NY",
        country: "USA",
        passportDetails: {
            passportNumber: "ABCD1234",
        },
    },
};
let passportNumber = details.address.passportDetails.passportNumber;
console.log(passportNumber);

// Array matching, Object matching

// Raps/Set 1 min

// Classes in JS