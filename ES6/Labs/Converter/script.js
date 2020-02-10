function convertEurtoUsd() {
    let euros = document.getElementById("euros").value;
    
    let calculateDollars = euros * 1.11;

    document.getElementById("dollars").value = calculateDollars;  
    
}

function convertUsdToEur() {
    let dollars = document.getElementById("dollars").value;

    let calculateEuros = dollars * 0.90;

    document.getElementById("euros").value = calculateEuros;        
}