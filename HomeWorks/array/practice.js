// Write a program to sum values of an array.
// const person = {
//   firstName: "lakim",
//   lastName: "dahal",
//   age: 23,

//   birthYear: "2000",
// };
// // const getAge = () => {
// //   return 2024 - person.birthYear;
// // };
// // const result= getAge();
// // console.log((result));
// const {birthYear,...rest}= person;
// console.log({rest});

const info = [
  "lakim dahal",
  { firstLet: "brother", lastLet: "sister" },
  { firstLet: "meronam" },
];
// console.log(info[1]);
// console.log(info[0]);
// info[1]= "lakim daaaahal";
// console.log(info);

const [[], ...rest]= info;
console.log(rest);
