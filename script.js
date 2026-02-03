function validateForm(){
  let email=document.getElementById("email").value;
  let pass=document.getElementById("password").value;

  if(!email.includes("@")){
    alert("Enter valid email");
    return false;
  }
  if(pass.length<6){
    alert("Password must be 6 characters");
    return false;
  }
  return true;
}
