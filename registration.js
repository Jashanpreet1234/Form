// function validate(){

//     var userEmail = document.userForm.email.value;
//     var userName = document.userForm.login.value;
//     var password1 = document.userForm.pass.value;

//     //email verification
//     var format = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$;

//     if(userEmail == ""){
//         document.getElementById("eAlert").innerHTML = "Field is empty. Email Address Required!";
//         return false;
//     }
    
//     else if(!userEmail.match(format)){
//         document.getElementById("eAlert").innerHTML = "Invalid Email Address.";
//         return false;
//     }
//     else{
//         document.getElementById("eAlert").innerHTML = "";
//     } 

//     //user name verification  
    
//     if(userName == ""){
//         document.getElementById("logAlert").innerHTML = "User name is required!";
//         return false;
//     }

//     else if(userName.length > 20){
//         document.getElementById("logAlert").innerHTML = "User name must be less than 20 characters!";
//         return false;
//     }
//     else{
//         document.getElementById("logAlert").innerHTML = "";
//     }

//     // password verification 

//     var lowerCase = /[a-z]/g;
//     var upperCase = /[A-Z]/g;
    
//     if(password1 == ""){
//         document.getElementById("passAlert").innerHTML = "Password is required!";
//         return false;
//     }

//     if(password1.length < 6){
//         document.getElementById("passAlert").innerHTML = "Password must be at least 6 characters long";
//         return false;
//     }

//     else if(!password1.match(lowerCase)){
//         document.getElementById("passAlert").innerHTML = "Password must contain one lower case letter";
//         return false;
//     }

//     else if(!password1.match(upperCase)){
//         document.getElementById("passAlert").innerHTML = "Password must contain one upper case letter";
//         return false;
//     }

//     else{
//         document.getElementById("passAlert").innerHTML = "";
//     }

//     // password match verification

//     var password2 = document.userForm.pass2.value;

//     if(password2 == ""){
//         document.getElementById("pass2Alert").innerHTML = "Retype your password!";
//         return false;
//     }
//     else if(password1 != password2){
//         document.getElementById("pass2Alert").innerHTML = "Password does not match!";
//         return false;
//     }
//     else{
//         document.getElementById("pass2Alert").innerHTML = "";
//     }
   

//     // Terms and Conditions verification

//     var termsCheck = document.getElementById("terms");

//     if(termsCheck.checked == false){
//         document.getElementById("termsAlert").innerHTML = "You must agree to the terms and conditions!";
//         return false;
//     }

//     return true;

// };

//   // newsletter verification

//     function confirmNews(){

//         var newsCheck = document.getElementById("newsletter");m

//         if(newsCheck.checked){
//             alert("You are subscribing to Weekly Kiktten Pictures Newsletter. Click Ok to Continue");
//     }

//     };

//     document.getElementById("newsletter").addEventListener("click", confirmNews, false);


const form = document.getElementby