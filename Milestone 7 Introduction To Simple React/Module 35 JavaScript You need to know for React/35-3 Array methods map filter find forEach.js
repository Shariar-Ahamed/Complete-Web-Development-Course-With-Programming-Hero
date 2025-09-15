// 1️⃣ Basic Object 
const person = {
  name: "Shahriar",
  age: 24,
  city: "Dhaka"
};

console.log(person.name); // Output: Shahriar
console.log(person.age);  // Output: 24



// 2️⃣ Object with Nested Object 
const student = {
  name: "Ripon",
  age: 23,
  marks: {
    math: 95,
    english: 88
  }
};

console.log(student.marks.math); // Output: 95



// 3️⃣ Object with Array 
const shop = {
  name: "Fruit Store",
  items: ["apple", "banana", "mango"]
};

console.log(shop.items[1]); // Output: banana



// 4️⃣ Object with Function (Method) 
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};

console.log(calculator.add(5, 3));      // Output: 8
console.log(calculator.multiply(5, 3)); // Output: 15



// 5️⃣ Dynamic Object (Properties can change) 
const car = {};
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2023;

console.log(car); // Output: { brand: 'Toyota', model: 'Corolla', year: 2023 }


//Todo: ---------JavaScript এ Array of Objects---------

// 1️⃣ Basic Array of Objects 
const students = [
  { name: "Shahriar", age: 24 },
  { name: "Ripon", age: 23 },
  { name: "James", age: 25 }
];

console.log(students[0].name); // Output: Shahriar
console.log(students[1].age);  // Output: 23



// 2️⃣ Array of Objects with Nested Object 
const employees = [
  { name: "Alice", position: "Manager", salary: { basic: 5000, bonus: 500 } },
  { name: "Bob", position: "Developer", salary: { basic: 4000, bonus: 300 } }
];

console.log(employees[0].salary.basic); // Output: 5000
console.log(employees[1].salary.bonus); // Output: 300



// 3️⃣ Array of Objects with Array inside 
const shops = [
  { name: "Fruit Store", items: ["apple", "banana", "mango"] },
  { name: "Veg Store", items: ["carrot", "potato", "onion"] }
];

console.log(shops[0].items[1]); // Output: banana
console.log(shops[1].items[2]); // Output: onion



// 4️⃣ Loop through Array of Objects 
const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

products.forEach(product => {
  console.log(`${product.name} costs $${product.price}`);
});

/* Output:
Laptop costs $800
Phone costs $500
Tablet costs $300
*/



//Todo: ---------JavaScript of array methods — map, filter, find, forEach—---------

// 1️⃣ forEach একটা array এর প্রতিটি element এর উপর কাজ করার জন্য।
const numbers0 = [1, 2, 3, 4, 5];

numbers0.forEach((num) => {
  console.log(num * 2);
});

// Output:
// 2
// 4
// 6
// 8
// 10



// 2️⃣ map একটা নতুন array return করে, যেখানে প্রতিটি element modify করা যায়।
const numbers1 = [1, 2, 3, 4, 5];

const doubled = numbers1.map((num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]



// 3️⃣ filter একটা নতুন array return করে, যেখানে শুধু condition মিলে এমন elements থাকে। 
const numbers2 = [1, 2, 3, 4, 5];

const evenNumbers = numbers2.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]



// 4️⃣ find array এর প্রথম element return করে যা condition মেনে চলে। 
const users = [
  { id: 1, name: "Shahriar" },
  { id: 2, name: "Ripon" },
  { id: 3, name: "James" }
];

const user = users.find((u) => u.id === 2);

console.log(user); // Output: { id: 2, name: "Ripon" }