let user_name = document.getElementById("username");
let password = document.getElementById("password");

function validate(){
    if(user_name.value == "" || password.value == ""){
        alert("Please enter all fields");
        return false;
    }

    else if(user_name.value == "admin" || password.value == "12345"){
        return true;

    }

    else{
            alert("Wrong Username or Password");
            return false;
    }
}