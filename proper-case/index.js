// const properUcase =require("proper-upper-case");
// const convertString=(string)=>{
// return properUcase(string);
// };
// const result= convertString("lakim is HeRE aT Broadway");
// console.log(result);

const slugCase = require("slugify");
const convertSlug = (string) => {
  return slugCase(string, {lower: true});
};
const result = convertSlug("ReacT JS Clean COde");
console.log(result);
