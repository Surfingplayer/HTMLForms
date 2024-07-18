document.getElementById('registrationForm').addEventListener('submit',function(event){
    event.preventDefault();
    let isValid=true;
    
    var name=document.getElementById('fname').value.trim();
    var phoneNumber=document.getElementById('phoneNumber');
    var email=document.getElementById('email').value.trim();
    var gender=document.querySelector('input[name="gender"]:checked');
    var password=document.getElementById('password');

    const nameRegex=/^([a-zA-Z ])/
    if(name===''){
        isValid=false
        document.getElementById('nameError').innerText='*Name is required';
        document.getElementById('nameError').style.color = 'red';
        document.getElementById('fname').style.borderColor='red';

    }else {
        if(!nameRegex.test(name)){
            isValid=false
            
            document.getElementById('nameError').innerText='*Name Invalid';
            document.getElementById('nameError').style.color = 'red';
            document.getElementById('fname').style.borderColor='red';

        }
        if(nameRegex.test(name)){
            document.getElementById("nameError").innerText = "";
            document.getElementById('fname').style.borderColor = '';
        }
        
    }
    emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$|^$|^ $/
    if(email===''){
        isValid=false
        document.getElementById('emailError').innerText='*Email is required';
        document.getElementById('emailError').style.color = 'red';
        document.getElementById('email').style.borderColor='red';

    }else {
        if(!emailRegex.test(email)){
            isValid=false
            document.getElementById('emailError').innerText='Name Invalid';
            document.getElementById('emailError').style.color = 'red';
            document.getElementById('email').style.borderColor='red';

        }
        if(nameRegex.test(name)){
            document.getElementById("emailError").innerText = " ";
            document.getElementById('email').style.borderColor = '';
        }
        
    }


    const phoneRegEx=/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (phoneNumber.value.trim() === '' || isNaN(phoneNumber.value) || !phoneRegEx.test(phoneNumber.value)) {
    isValid = false;
    document.getElementById('numberError').innerText = 'Valid contact number is required (10 digits)';
    document.getElementById('numberError').style.color = 'red';
    document.getElementById('phoneNumber').style.borderColor = 'red';
    } else {
        document.getElementById("numberError").innerText = " ";
        document.getElementById('phoneNumber').style.borderColor = '';
    }

    if (!gender) {
    isValid = false;
    document.getElementById('genderError').innerText = 'Gender is required';
    document.getElementById('genderError').style.color = 'red';
    } else {
        document.getElementById("genderError").innerText = " ";
    }
    const passwordRegex = /^[A-Z][a-zA-Z0-9]{7,}$/;

    if(password.value===''){
        isValid = false;
        document.getElementById('passwordError').innerText = 'Password is required';
        document.getElementById('passwordError').style.color = 'red';
    } else {
        if(password.value.length>=8){
            if(!passwordRegex.test(password.value)){
                document.getElementById('passwordError').innerText = 'Password is required and must meet the following criteria:\n- Must start with a capital letter (A-Z).\n- Should contain at least 8 characters.\n- Can include lowercase letters (a-z), numbers (0-9), and special characters.';
                document.getElementById('passwordError').style.color = 'red';
            }
            else{
                document.getElementById("passwordError").innerText = " ";
            }
           
        } else{
            document.getElementById('passwordError').innerText = 'Password should be minimum 8 characters.';
                document.getElementById('passwordError').style.color = 'red';
        }
       
       
    }
    
    if (isValid) {
        document.getElementById('registrationForm').submit();
    }

   
})


