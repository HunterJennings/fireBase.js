 firebase
 var firebaseConfig = {
     apiKey: "AIzaSyAblsxfICTFVmibAtT618T8KdaDsXIlpEE",
     authDomain: "fir-hw-50629.firebaseapp.com",
     databaseURL: "https://fir-hw-50629.firebaseio.com",
     projectId: "fir-hw-50629",
     storageBucket: "",
     messagingSenderId: "743702701608",
     appId: "1:743702701608:web:1d382c1056f07ac3"
   };
  
   firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#currentTime").append(moment().format("hh:mm A"));
//button
$("#trainButton").on("click", function() {
    event.preventDefault();
    var trainName = $("#trainNameBtn").val().trim();
    var destination = $("#destinationBtn").val().trim();
    var firstTrain = $("#firstTrainBtn").val().trim();
    var frequency = $("#frequencyBtn").val().trim();
   
     database.ref().push({
         name: trainName,
         destination: destination,
         firstTrain: firstTrain,
         frequency: frequency
     })
});

database.ref().on("child_added", function(response){
    console.log(response.val());
    var name =  response.val().name;
    var destination =response.val().destination;
    var firstTrain = response.val().firstTrain;
    var frequency = response.val().freq;
    
    $("#trainName").append("<p>" + name + "</p>");
    $("#destinationName").append("<p>" + destination + "</p>");
    $("#arrivalName").append("<p>" + firstTrain + "</p>");
    $("#frequencyName").append("<p>" + frequency + "</p>");
});

  
