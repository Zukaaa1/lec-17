// let userName = "Giorgi"; // 'Giorgi' | `hello ${Giorgi}`

// console.log(typeof userName); // string

// let age = 30;

// console.log(typeof age); // number

// let isStudent = false;

// console.log(typeof isStudent); // boolean

// let testOne = null;

// console.log(typeof testOne); // object

// let job;

// console.log(typeof job); // undefined

// ! Object & Array
//  *object-ის სახელი
// let user1 = {
//   //*KEY:VALUE
//   id: 1234,
//   userName: "Zura",
//   isStunedt: false,
//   email: "zurajaparidze4@gmail.com",
//   recoverEmail: null,
//   address: {
//     country: "Georgia",
//     city: "Tbilisi",
//     street: "Agmashenebeli",
//     homeId: 10,
//   },
// };

//? console.log(user1["address"].city);
// console.log(user1.address.country);

// let userArray = ["Zura", 10, false, "zurajaparidze4@gmail.com"];

// userArray.shift(); // წაშლა თავში
// userArray.pop(); // წაშლა ბოლოში

// userArray.push("New Value of array");
// console.log(userArray);

// ! ClassWork
let themp = prompt("რამდენი გრადუსია?");
let hot = 30;
let cold = 0;

if (themp > hot) {
  console.log("ცხელა, მზიანი ამინდია");
} else if (themp < cold) {
  console.log("ცივა, ცუდი ამიდნია");
} else if (themp > cold && themp < hot) {
  console.log("ნორმალური ამინდია");
} else {
  console.log("ჩაწერე ტემპერატურა სწორად!");
}
