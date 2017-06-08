

  // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC3U0_LCOuneQcEHq8zsNEadMdVNpXvHck",
    authDomain: "train-schedular-2c601.firebaseapp.com",
    databaseURL: "https://train-schedular-2c601.firebaseio.com",
    projectId: "train-schedular-2c601",
    storageBucket: "train-schedular-2c601.appspot.com",
    messagingSenderId: "87559549785"
  };
  
firebase.initializeApp(config);



var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = "";
var minAway=""
   
$(document).ready(function(){
$("#submit").on("click", function(){

  event.preventDefault();


// get inputs
trainName = $("#inputName").val().trim();
destination = $("#inputDestination").val().trim();
firstTrain = $("#inputTime").val().trim();
frequency = $("#inputFrequency").val().trim();


console.log(trainName);
console.log(destination);
console.log(firstTrain);
console.log(frequency);



database.ref().set({
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,
});

addRow();


});
});

////math



///function to add rows to the table
function addRow(){
  $("#tbody").append('<tr><td>'+ trainName + '</td><td>'+ destination + '</td><td>'+ frequency + '</td><td>' + minAway + '</tr>')
};



///Math functions



















