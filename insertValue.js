// How to insert a property:value / key:value inside an object

let person = {};

// Two ways to add property value inside an object

// First solution: dot notation
person.Name = "John Doe";
person.Address = "Penang";

// Second solution: bracket notation
person["Age"] = 33;


// How to loop inside an object
for (key in person) {
    console.log(key + ": " + person[key])
}