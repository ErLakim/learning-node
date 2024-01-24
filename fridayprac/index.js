const foodA=["Noodle","Pasta","Ice-Cream"];
const foodB=["Fries","Ice-Cream","Pizza","Pasta"];
const commonFood=(foodA,foodB)=>{foodA.filter((food)) = foodB.includes((food)) ;
}
const result = commonFood(foodA, foodB);

console.log(result);