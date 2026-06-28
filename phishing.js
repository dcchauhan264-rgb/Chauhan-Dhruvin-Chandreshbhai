function analyzeEmail(){
document.getElementById("scanBar").style.width="0%";

setTimeout(()=>{

document.getElementById("scanBar").style.width="100%";

},100);
let text =
document.getElementById("emailText")
.value
.toLowerCase();

let keywords = [
"urgent",
"verify",
"click here",
"free gift",
"winner",
"bank account",
"password reset",
"account suspended",
"limited time",
"claim now",
"update payment",
"login now"
];

let detected = [];

keywords.forEach(word => {

if(text.includes(word)){
detected.push(word);
}

});

let score = detected.length * 10;

if(score > 100){
score = 100;
}

let risk = "";
let color = "";

if(score <= 20){
risk = "✅ Safe";
color = "lime";
}
else if(score <= 50){
risk = "⚠ Suspicious";
color = "orange";
}
else{
risk = "🚨 High Risk";
color = "red";
}

document.getElementById("riskLevel").innerHTML =
"Risk Level: " + risk;

document.getElementById("riskLevel").style.color =
color;

document.getElementById("riskScore").innerHTML =
"Risk Score: " + score + "%";

if(detected.length > 0){

document.getElementById("warningWords").innerHTML =
"<h3>Detected Suspicious Words:</h3>" +
detected.map(word =>
`<p>• ${word}</p>`
).join("");

}
else{

document.getElementById("warningWords").innerHTML =
"<p>No suspicious keywords found.</p>";

}

}