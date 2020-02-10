alert("Implement relevant code in Lab01-Validation.js file");

//Use classes (.error and .valid) defined in html style element as shown in example fields

//1) validation should occur after 

// 1.1) user enters data field by field 
// 1.1) user clicks on submit for all fields

//2) On validation failure message box should be displayed with relevant message

//3) error message should disappear when user clicks on it (use class .message-box-closed) 

function validateNameField() {
    let nameInput = document.getElementById("txtName");    
         
    if (nameInput.value){
        nameInput.classList.add("valid");     
        document.getElementById("msgTxtName").style.display = "none";
    } else {
        document.getElementById("msgTxtName").innerHTML = "Error! Not a Name";
        document.getElementById("msgTxtName").style.display = "inline";
        nameInput.classList.add("error");
    }
    

}

function validateAgeField() {
    let ageInput = document.getElementById("txtAge");    
         
    if (ageInput.value && !isNaN(ageInput.value) && (ageInput.value > 1 && ageInput.value < 100)){
        ageInput.classList.add("valid");   
        document.getElementById("msgTxtAge").style.display = "none";          
    } else if (isNaN(ageInput.value)) {
        document.getElementById("msgTxtAge").innerHTML = "Error! Not a Number";
        document.getElementById("msgTxtAge").style.display = "inline";  
        ageInput.classList.add("error"); 
    } else if (ageInput.value && (ageInput.value < 1 || ageInput.value > 100)){
        document.getElementById("msgTxtAge").innerHTML = "Error! Number is uncorrect";
        document.getElementById("msgTxtAge").style.display = "inline";  
        ageInput.classList.add("error"); 
    } 

}

function validateEmailField() {
    let emailInput = document.getElementById("txtEmail");    
         
    if (emailInput.value){
        emailInput.classList.add("valid");  
        document.getElementById("msgTxtEmail").style.display = "none";      
    } else {
        document.getElementById("msgTxtEmail").innerHTML = "E-mail is Mandotory";
        document.getElementById("msgTxtEmail").style.display = "inline";        
        emailInput.classList.add("error");
    }

}

function validatePasswordField() {
    let passwordInput = document.getElementById("txtPassword");    
         
    if (passwordInput.value){
        passwordInput.classList.add("valid");    
        document.getElementById("msgTxtPassword").style.display = "none";    
    } else {
        document.getElementById("msgTxtPassword").innerHTML = "Password is Mandotory";
        document.getElementById("msgTxtPassword").style.display = "inline";        
        emailInput.classList.add("error");
    }

}

function validateRepeatedPasswordField() {
    let repeatedPasswordInput = document.getElementById("txtRepeatPassword");    
         
    if (repeatedPasswordInput.value){
        repeatedPasswordInput.classList.add("valid");
        document.getElementById("msgTxtRepeatPassword").style.display = "none";         
    } else {
        document.getElementById("msgTxtRepeatPassword").innerHTML = "Repeating is Mandotory";
        document.getElementById("msgTxtRepeatPassword").style.display = "inline";        
        repeatedPasswordInput.classList.add("error");
    }

}

function validateIdCodeField() {
    let idCodeInput = document.getElementById("txtIdCode");    
         
    if (idCodeInput.value){
        idCodeInput.classList.add("valid");        
    } 

}

function validateCreditCardField() {
    let ccInput = document.getElementById("txtCreditCard");    
         
    if (ccInput.value && ccInput.value.length >= 16){
        ccInput.classList.add("valid");
        document.getElementById("msgTxtCreditCard").style.display = "none";         
    } else if (ccInput.value && ccInput.value.length < 16) {
        document.getElementById("msgTxtCreditCard").innerHTML = "Error! Number is not correct!";
        document.getElementById("msgTxtCreditCard").style.display = "inline";        
        ccInput.classList.add("error");
    }

}

function validateEvenNumberField() {
    let evenNumberInput = document.getElementById("txtEvenNumber");    
         
    if (evenNumberInput.value && evenNumberInput.value % 2 == 0){
        evenNumberInput.classList.add("valid");      
        document.getElementById("msgTxtEvenNumber").style.display = "none";  
    } else if (evenNumberInput.value && evenNumberInput.value % 2 != 0) {
        document.getElementById("msgTxtEvenNumber").innerHTML = "Error! Number is not even!";
        document.getElementById("msgTxtEvenNumber").style.display = "inline";        
        evenNumberInput.classList.add("error");
    }

}

function validateIsbnField() {
    let isbnInput = document.getElementById("txtIsbn");    
         
    if (isbnInput.value && isbnInput.value.length == 13){
        isbnInput.classList.add("valid");   
        document.getElementById("msgTxtIsbn").style.display = "none";      
    } else if (isbnInput.value && isbnInput.value.length < 13) {
        document.getElementById("msgTxtIsbn").innerHTML = "Error! Number is not correct!";
        document.getElementById("msgTxtIsbn").style.display = "inline";        
        isbnInput.classList.add("error");
    }

}

function validateAllFields() {
    validateNameField();
    validateAgeField();
    validateEmailField();
    validatePasswordField();
    validateRepeatedPasswordField();
    validateIdCodeField();
    validateEvenNumberField();
    validateCreditCardField();
    validateIsbnField();



}

function hideNameError(){   
   //let alertMsg = document.getElementById("msgTxtName");
   //alertMsg.classList.remove("alert","alert-error");
   //alertMsg.classList.add("message-box-closed");
   //alertMsg.innerHTML='';
    
   //Better practice when there are classes already added to a tag:
   document.getElementById("msgTxtName").style.display = "none";
}

function hideAgeError(){   
    /* let alertMsg = document.getElementById("msgTxtAge");
    alertMsg.classList.remove("alert","alert-error");
    alertMsg.classList.add("message-box-closed");
    alertMsg.innerHTML='';  */    

    document.getElementById("msgTxtAge").style.display = "none";
    
 }

function hideEmailError(){   
    /* let alertMsg = document.getElementById("msgTxtEmail");
    alertMsg.classList.remove("alert","alert-error");
    alertMsg.classList.add("message-box-closed");
    alertMsg.innerHTML='';     */ 

    document.getElementById("msgTxtEmail").style.display = "none";
    
 }

 function hidePasswordError(){   
    /* let alertMsg = document.getElementById("msgTxtPassword");
    alertMsg.classList.remove("alert","alert-error");
    alertMsg.classList.add("message-box-closed");
    alertMsg.innerHTML='';    */  
    
    document.getElementById("msgTxtPassword").style.display = "none";
 }

 function hideRepeatedPasswordError(){   
    /* let alertMsg = document.getElementById("msgTxtRepeatPassword");
    alertMsg.classList.remove("alert","alert-error");
    alertMsg.classList.add("message-box-closed");
    alertMsg.innerHTML='';    */  

    document.getElementById("msgTxtRepeatPassword").style.display = "none";
    
 }

 function hideEvenNumberError(){   
    /* let alertMsg = document.getElementById("msgTxtEvenNumber");
    alertMsg.classList.remove("alert","alert-error");
    alertMsg.classList.add("message-box-closed");
    alertMsg.innerHTML='';   */  
    
    document.getElementById("msgTxtEvenNumber").style.display = "none";
    
 }

 function hideCreditCardError(){   
    /* let alertMsg = document.getElementById("msgTxtCreditCard");
    alertMsg.classList.remove("alert","alert-error");
    alertMsg.classList.add("message-box-closed");
    alertMsg.innerHTML='';   */   

    document.getElementById("msgTxtCreditCard").style.display = "none";
    
 }

 function hideIsbnError(){   
    /* let alertMsg = document.getElementById("msgTxtIsbn");
    alertMsg.classList.remove("alert","alert-error");
    alertMsg.classList.add("message-box-closed");
    alertMsg.innerHTML='';  */
    
    document.getElementById("msgTxtIsbn").style.display = "none";
    
 }








