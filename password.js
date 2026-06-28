function checkPassword(){

let password =
document.getElementById("password").value;

let score = 0;
let suggestions = [];

if(password.length >= 8){
score += 25;
}else{
suggestions.push("Use at least 8 characters");
}

if(/[A-Z]/.test(password)){
score += 25;
}else{
suggestions.push("Add an uppercase letter");
}

if(/[0-9]/.test(password)){
score += 25;
}else{
suggestions.push("Add a number");
}

if(/[!@#$%^&*]/.test(password)){
score += 25;
}else{
suggestions.push("Add a special character");
}

let strength = "";
let color = "";

if(score <= 25){
strength = "Weak";
color = "red";
}
else if(score <= 50){
strength = "Medium";
color = "orange";
}
else if(score <= 75){
strength = "Good";
color = "yellow";
}
else{
strength = "Strong";
color = "lime";
}

document.getElementById("strengthBar").style.width =
score + "%";

document.getElementById("strengthBar").style.background =
color;

document.getElementById("strengthText").innerHTML =
"Strength: " + strength;

document.getElementById("score").innerHTML =
"Score: " + score + "/100";

document.getElementById("suggestions").innerHTML =
suggestions.map(item => `<p>• ${item}</p>`).join("");
}const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click",()=>{

if(passwordInput.type==="password"){

passwordInput.type="text";

togglePassword.innerHTML="🙈";

}

else{

passwordInput.type="password";

togglePassword.innerHTML="👁️";

}

});