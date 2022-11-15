//creating the suBmit function and grabing the element and giving it event click
var item = document.getElementById('submit');
item.addEventListener('click', suBmit);
function suBmit(event){
    event.preventDefault();//preventing the form to submit 
    examineData(); 
}
// storing the value of input fields in variables
var one = document.getElementById('name');
var two = document.getElementById('email');
var three = document.getElementById('password1');
var four = document.getElementById('password2');
var five =document.getElementById('phone');
// creating the onchange event functions for different inputs
function change1(){
      one.style.backgroundColor = '#4dd6e8';
      one.style.fontStyle = 'italic';
      one.style.fontSize = '0.9rem';
      
}
function change2(){
    two.style.backgroundColor = '#4dd6e8';
    two.style.fontStyle = 'italic';
    two.style.fontSize = '0.9rem';
}
function change3(){
    three.style.backgroundColor = '#4dd6e8';
    three.style.fontStyle = 'italic';
    three.style.fontSize = '0.9rem';
}
function change4(){
    four.style.backgroundColor = '#4dd6e8';
    four.style.fontStyle = 'italic';
    four.style.fontSize = '0.9rem';
}
function change5(){
    five.style.backgroundColor = '#4dd6e8';
    five.style.fontStyle = 'italic';
    five.style.fontSize = '0.9rem';
}

function examineData(){//creating a function that validates the values we write when we submit the form 
    const oneValue = one.value.trim();// trim is used to remove white spaces from both sides
    const twoValue = two.value.trim();
    const threeValue = three.value.trim();
    const fourValue = four.value.trim();
    const fiveValue = five.value.trim();

//condtions for name 
    if(oneValue ==""){//empty value conditions
        errorPop(one,"This field can't be blank");
    }else if(!letterOnly(oneValue)){//checking for aphabets only
        errorPop(one,"Alphabets only");
    }
    else if(oneValue.length<5){//name  should not be less than 5 letters
        errorPop(one,"Name cannot be less than 5 characters")
    }
    else{
        successPop(one);//calling success function
    }
//conditons for  email 
    if(twoValue ==""){//empty value conditions
        errorPop(two,"Email can't be blank");
    }else if(!isEmail(twoValue)){// checking the format of email entered
        errorPop(two,"Email is not valid");
    }
    else{
        successPop(two);//calling success function
    }
//conditions for password 
    if (threeValue ==""){//empty value conditions
        errorPop(three,"password cannot be blank");
    }else if(threeValue == oneValue){//password should not be same  as name
        errorPop(three, "password cannot be your name");
    }
    else if(threeValue == "password"){//this pattern cannot be a password
        errorPop(three, "password cannot be password");
    }
    else if(threeValue.length < 8){//length of the password should not be less than 8 characters 
        errorPop(three, "password cannot be less than 8 characters");
    }
    else{
        successPop(three);//calling success function
    }
//conditions for confirm password 
    if(fourValue ==""){//empty value conditions
        errorPop(four,"Confirm Password can't be blank");
    } else if(threeValue !== fourValue){//confirm password and password should be same
        errorPop(four , "Confirm Password isn't same as password");
    }
    else{
        successPop(four);//calling success function
    }
//condition for phone number
    if(fiveValue == ""){//empty value conditions
        errorPop(five, "This cannot be blanked");
    }else if(isNaN(fiveValue)){//value should be only numbers
        errorPop(five,"Phone number can only be numbers");
    } 
    else if(fiveValue.length != 10){// length of the phonenumber sould be 10 digits only
        errorPop(five,"Phone number should be of 10 digits");
    } else if(fiveValue == 1234567890){//this pattern of phoneNo. cannot be accepted
        errorPop(five, "This cannot be a phone number");
    }
    else{
        successPop(five);//calling success function
    }
}
//creating a function for error 
function errorPop(x, message){
    var errorBox = x.parentElement;
    errorBox.className = "inputData error";
    var span = errorBox.querySelector("span");
    var fa = errorBox.querySelector(".fa-solid");
    span.innerText = message;
    fa.className = "fa-solid fa-triangle-exclamation";
}
//creating a function for success
function successPop(x){
    var successBox = x.parentElement;
    successBox.className = "inputData success";
    var fa = successBox.querySelector(".fa-solid");
    fa.className = "fa-solid fa-circle-check";
}
//creating a function for email format using regular expression
function isEmail(e){
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}
// creating a function to check for alphabets only 
function letterOnly(k){
    var ltrs = /^[A-Za-z\s]+$/;
    return ltrs.test(k);
}