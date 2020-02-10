alert ("Implement solution in Airports.js script");

function generateAirports() {
    let departureSelect = document.getElementById("slcDepartures");
    let destinationSelect = document.getElementById("slcDestinations");
    
    if (departureSelect.options.length==0){
        loadDepartures();
    } else {
        loadDestinations(); 
    }
   
}

function loadDepartures(){
    //console.log("loadDepartures");
    let departureSelect = document.getElementById("slcDepartures");
    for(let i = 0; i < airports.length; i++) {     
        let departureOption = document.createElement("Option"); 
        departureOption.value = airports[i].departure;
        departureOption.text = airports[i].departure;
        departureSelect.appendChild(departureOption);        
    }
}

function loadDestinations(){
    //console.log("loadDestinations");
    let departureSelect = document.getElementById("slcDepartures");
    let destinations =airports[departureSelect.selectedIndex].destinations;
    let destinationSelect = document.getElementById("slcDestinations");   

    destinationSelect.options.length = 0;

    for(let i = 0; i < destinations.length; i++) {          
        let destinationOption = document.createElement("Option");      
        destinationOption.value = destinations[i];
        destinationOption.text = destinations[i];
        destinationSelect.appendChild(destinationOption); 
    }      
}


