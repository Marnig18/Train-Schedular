


   


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
var firstTime = "";
var frequency = "";

 


$(document).ready(function(){
$("#submit").on("click", function(){

  event.preventDefault();


// get inputs
 trainName = $("#inputName").val().trim();
  destination = $("#inputDestination").val().trim();
 firstTime = $("#inputTime").val().trim();
  frequency = $("#inputFrequency").val().trim();


console.log(trainName);
console.log(destination);
console.log(firstTime);
console.log(frequency);




  





var convertedTime = moment(firstTime,"hh:mm").subtract(1, "years");
console.log(convertedTime);

var currentTime = moment().format("hh:mm")
console.log(currentTime);

var difference = moment().diff((convertedTime), "minutes");
  console.log(difference);

var remainder = difference%frequency;
console.log(remainder);

var minAway = frequency-remainder;
console.log(minAway);

var nextTrain = moment().add(minAway, "minutes").format("hh:mm");
console.log(nextTrain)



    database.ref().push({

      trainName: trainName,
      destination: destination,
      nextTrain:nextTrain,
      frequency: frequency,
      minAway: minAway,
});

   $("#trainName").val("");
  $("#inputDestination").val("");
  $("#inputTime").val("");
  $("#inputFrequency").val("");


});






database.ref().on("child_added", function(snapshot){
  console.log(snapshot.val());

 console.log(snapshot.val());

   snapshot.val().trainName;
  snapshot.val().destination;
  snapshot.val().nextTrain;
  snapshot.val().frequency;
   snapshot.val().minAway;

  // console.log(name);
  // console.log(dest);
  // console.log(next);
  // console.log(freq);

$("#tbody").append('<tr><td>'+ snapshot.val().trainName + '</td><td>'+ snapshot.val().destination + '</td><td>'+ snapshot.val().frequency + '</td><td>' + snapshot.val().nextTrain + '</td><td>' + snapshot.val().minAway + '</tr>')
});




},function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });






 




    // TESTING
    // var start = moment().subtract(12, 'hours')
    // var end = moment()
    // var duration = moment.duration(start.diff(end));
    // var timeSpan = duration.asMinutes()
    // console.log(timeSpan)
    // debugger
    // END TESTING 






