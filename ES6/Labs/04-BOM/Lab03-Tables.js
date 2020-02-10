alert ("Implement solution in Lab03-Tables.js file ");
alert ("Test data connected: OrderNo: "+shipments[0].orderNo);

let shipmentsPerPage = new Array();
let currentPage = 1;
let numberPerPage = 10;
let numberOfPages = Math.ceil(shipments.length / numberPerPage);

function nextPage() {
    currentPage = currentPage + 1;
    loadShipments();
}

function previousPage() {   
    currentPage = currentPage - 1;
    loadShipments();
}

function firstPage() {
    currentPage = 1;
    loadShipments();
}

function lastPage() {
    currentPage = numberOfPages;
    loadShipments();
}

function loadShipments() {
    let begin = ((currentPage - 1) * numberPerPage);
    let end = begin + numberPerPage;

    shipmentsPerPage = shipments.slice(begin, end);

    generateTableRows();
    checkButtons();
}

function generateTableRows() {
    
    let table = document.getElementById("shipmentsTable");
    let row = table.insertRow();
    let cellOrderNo = row.insertCell(0);
    let cellDate = row.insertCell(1);
    let customer = row.insertCell(2);
    let trackingNo = row.insertCell(3);
    let status = row.insertCell(4);
    let consignee = row.insertCell(5);
    let buttonsCell = row.insertCell(6);

    if (table.rows.length == 0) {
        for (let i = 0; i < shipmentsPerPage.length; i++) { 
                           
            row = table.insertRow(i); // Create an empty <tr> element and add it to the 1st position of the table.

            // Add some text to the new cells:
            cellOrderNo.innerHTML = shipmentsPerPage[i].orderNo;
            cellDate.innerHTML = shipmentsPerPage[i].date;
            customer.innerHTML = shipmentsPerPage[i].customer;
            trackingNo.innerHTML = shipmentsPerPage[i].trackingNo;
            status.innerHTML = shipmentsPerPage[i].status;
            consignee.innerHTML = shipmentsPerPage[i].consignee;
            buttonsCell.innerHTML = "<a href=\"#\" class=\"btn-action glyphicons eye_open btn-info\"><i></i></a>"+
                                    "<a href=\"#\" class=\"btn-action glyphicons pencil btn-success\"><i></i></a>"+
                                                                 "<a href=\"#\" class=\"btn-action glyphicons remove_2 btn-danger\"><i></i></a>";
        }   
    } else {
        for (let i = 0; i < shipmentsPerPage.length; i++) {
            cellOrderNo.innerHTML = shipmentsPerPage[i].orderNo;
            cellDate.innerHTML = shipmentsPerPage[i].date;
            customer.innerHTML = shipmentsPerPage[i].customer;
            trackingNo.innerHTML = shipmentsPerPage[i].trackingNo;
            status.innerHTML = shipmentsPerPage[i].status;
            consignee.innerHTML = shipmentsPerPage[i].consignee;
            buttonsCell.innerHTML = "<a href=\"#\" class=\"btn-action glyphicons eye_open btn-info\"><i></i></a>"+
                                    "<a href=\"#\" class=\"btn-action glyphicons pencil btn-success\"><i></i></a>"+
                                    "<a href=\"#\" class=\"btn-action glyphicons remove_2 btn-danger\"><i></i></a>";
        }
    }
}  


  

function checkButtons() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

 





