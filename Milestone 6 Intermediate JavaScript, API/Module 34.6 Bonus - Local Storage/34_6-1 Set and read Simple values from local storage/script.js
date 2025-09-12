
// Todo 🔹Syntax:
// ডাটা সেট করা
localStorage.setItem("key", "value");

// ডাটা পাওয়া
let data = localStorage.getItem("key");

// ডাটা রিমুভ করা
localStorage.removeItem("key");

// সব ডাটা ক্লিয়ার করা
localStorage.clear();



// Todo 🔹 Example:
// ডাটা সেভ করা
localStorage.setItem("username", "Shahriar");

// ডাটা পাওয়া
let user = localStorage.getItem("username");
console.log(user); // Output: Shahriar

// ডাটা ডিলিট করা
localStorage.removeItem("username");

// সব ডাটা ক্লিয়ার
localStorage.clear();



// Todo 🔹 Important Point:
//* শুধু string স্টোর হয়। Object/Array স্টোর করতে হলে JSON ব্যবহার করতে হবে। 
// Object কে স্ট্রিং এ কনভার্ট করে সেভ
let user1 = { name: "Shahriar", age: 24 };
localStorage.setItem("user", JSON.stringify(user1));

// আবার রিড করার সময় Object এ কনভার্ট করা
let getUser = JSON.parse(localStorage.getItem("user"));
console.log(getUser.name); // Shahriar