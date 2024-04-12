function validate(){
    var pass1 = document.getElementById("pswd1").value;
    var pass2 = document.getElementById("pswd2").value;
    

    if(pass1 == ""){
        document.getElementById("message1").innerHTML = "Password required!";
        return false;
    }

    if(pass2 == ""){
        document.getElementById("message2").innerHTML = "Confirm password first !";
        return false;
    }

    if(pass1.length<8){
        document.getElementById("message1").innerHTML = "Password length must be atleast 8 characters";
        return false;
    }

    if(pass1.length>15){
        document.getElementById("message1").innerHTML = "Password length must not exceed 15 characters";
        return false;
    }

    if(pass1 === pass2){
        alert("Password  Matched. Password validation Successful.");
    }

    else{
        // document.getElementById("message2").innerHTML = "Password are not same";
        alert("Password didn't match. Password validation unsuccessful");
        return false;
    }
}