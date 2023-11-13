// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    document.getElementById("missionTarget").innerHTML =
    `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;
}
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 
 
 function validateInput(testInput) {
    let varInput = isNaN(testInput);
    if (testInput === ""|| testInput === null){
        return "Empty"
    }
    else if (varInput === false){
        return "Is a Number";
    }
    else if(varInput === true){
        return "Not a Number";
    }
 }
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
  
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") 
    {
      alert("All fields are required!");
  
    }
    else if (validateInput(pilot) === "Is a Number" ||validateInput(copilot) === "Is a Number" ||validateInput(fuelLevel) === "Not a Number" ||validateInput(cargoLevel) === "Not a Number") 
    {
      alert("Make sure to enter valid information for each field!");
    }
    else 
    {
      list.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
      
      if (fuelLevel < 10000 && cargoLevel <= 10000) {
        
        
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        document.querySelector("#launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.querySelector("#launchStatus").style.color = "red";
      }
  
      else if (fuelLevel >= 10000 && cargoLevel > 10000) {
  
  
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        document.querySelector("#launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.querySelector("#launchStatus").style.color = "red";
      }
  
      else if (fuelLevel < 10000 && cargoLevel > 10000) {
  
  
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        document.querySelector("#launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.querySelector("#launchStatus").style.color = "red";
      }
  
      else {
  
        document.querySelector("#launchStatus").style.color = "green";
        document.querySelector("#launchStatus").innerHTML = "Shuttle is Ready for Launch"
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
      }
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()});

     return planetsReturned;
     
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;