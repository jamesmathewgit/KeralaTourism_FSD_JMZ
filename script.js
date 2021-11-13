



// function isEmailAddress() {

//     var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
//     var str=Number(document.getElementById("signuppass").value)   

//     alert(str.match(pattern)); 
//     return str.match(pattern);    

//     alert('All Good')
// }



function checkEmail() {
    var fname = document.getElementById('signupfname');
    var lname = document.getElementById('signuplname');
    var email = document.getElementById('signupmail');
    var cont = document.getElementById('signupcont');
    var pass = document.getElementById('signuppass');
    var repass = document.getElementById('signuprepass');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var passfilter=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var contfilter=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;


    if (fname.value==''){
        alert('Please provide a valid First Name');
        return false;
    }
    else if (lname.value==''){
        alert('Please provide a valid Last Name');
        return false;
    }   
    else if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
    else if (!contfilter.test(cont.value)) {
        alert('Please provide a valid Contact');
        email.focus;
        return false;
    }
    else if (!passfilter.test(pass.value)) {
        alert('Please provide a valid password');
        pass.focus;
        return false;
    }
    else if (pass.value!=repass.value) {
        alert('Password and Re-enterPassword Not match');
        pass.focus;
        return false;        
    }

    else {
        alert('All Good. User Successfully Registered');
    }     
    

}





function loginvalidation() {
    var email = document.getElementById('email');

    var pass = document.getElementById('pass');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var passfilter=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;


    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }

    else if (!passfilter.test(pass.value)) {
        alert('Please provide a valid password');
        pass.focus;
        return false;
    }

    else {
        alert('Logged in Successfully');
    }     
    

}
