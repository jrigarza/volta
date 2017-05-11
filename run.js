var latitude;
var longitude;
var report;
var reportId = 0;

// Function to get the location of the user//
function geoFindMe(){
  var output = document.getElementById("outLocation");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

// Function to get the report text //
function getReport(){
    report = document.getElementById("report").value;
    var output = document.getElementById("outReport");
    output.innerHTML = '<p>Your report has been submitted.</p>';
}

// Function to write report to Database //
function writeUserReport(){
    report = document.getElementById("report").value;
    var output = document.getElementById("outReport");
    output.innerHTML = '<p>Your report has been submitted.</p>';
    
    firebase.database().ref('reports/' + reportId).set({
    latitude: latitude,
    longitude: longitude,
    reportText: report
  });
  reportId++;
}