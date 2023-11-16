// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);

    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        //console.log(listedPlanets);
        let pickPlanet1= pickPlanet(listedPlanets);
        console.log(pickPlanet1);
        let name =pickPlanet1.name;
        let diameter=pickPlanet1.diameter;
        let star=pickPlanet1.star;
        let distance=pickPlanet1.distance;
        let moons=pickPlanet1.moons;
        let imageUrl=pickPlanet1.image; 
        addDestinationInfo(document,name,diameter,star,distance,moons,imageUrl);

        //const destination = document.getElementById("missionTarget").innerHTML;
        //addDestinationInfo(document,pickPlanet.name[0],pickPlanet.diameter[0],pickPlanet.star[0],pickPlanet.distance[0],pickPlanet.moons[0],pickPlanet.imageUrl[0]);
        
    });
    
    let list = document.getElementById("faultyItems");
    list.style.visibility="hidden";
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
     // event.preventDefault();
      let pilot = document.querySelector("input[name=pilotName]").value;
      let copilot=document.querySelector("input[name=copilotName]").value;
      let fuelLevel=document.querySelector("input[name=fuelLevel]").value;
      let cargoLevel=document.querySelector("input[name=cargoMass]").value;
    formSubmission(document, list, pilot, copilot, (fuelLevel), (cargoLevel));
    event.preventDefault();
        });
});