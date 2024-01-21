//function to convert meters to kilometers
const metersToKilometers = meters => meters / 1000;

// Export the function for use in other files
module.exports = {
    metersToKilometers,
};

// index.js

// Import the metersToKilometers function from lib-length.js
// const { metersToKilometers } = require("./lib-length");

// const distanceInMeters = 9900;
// const distanceInKilometers = metersToKilometers(distanceInMeters);

// console.log(
//   `${distanceInMeters} meters is equal to ${distanceInKilometers} kilometers.`
// );