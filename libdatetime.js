// library that show current date and time
// myDateTimeLibrary.js

var MyDateTimeLibrary = {};

MyDateTimeLibrary.getCurrentDateTime = function () {
  var currentDate = new Date();

  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // Months are zero-based
  var day = currentDate.getDate();

  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  var formattedDateTime =
    day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;

  return formattedDateTime;
};
