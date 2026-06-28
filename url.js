function scanURL(){

let url =
document.getElementById("urlInput")
.value
.toLowerCase();

let score = 100;
let warnings = [];

if(!url.startsWith("https://")){
score -= 30;
warnings.push("Website is not using HTTPS");
}

if(url.length > 50){
score -= 20;
warnings.push("URL is unusually long");
}

let suspiciousWords = [
"login",
"verify",
"secure",
"update",
"free",
"gift",
"bank",
"account"
];

suspiciousWords.forEach(word => {

if(url.includes(word)){
score -= 10;
warnings.push(`Contains suspicious word: ${word}`);
}

});

let ipPattern =
/^(https?:\/\/)?(\d{1,3}\.){3}\d{1,3}/;

if(ipPattern.test(url)){
score -= 30;
warnings.push("URL uses an IP address instead of a domain");
}

if(score < 0){
score = 0;
}

let status = "";
let color = "";

if(score >= 80){
status = "✅ Safe";
color = "lime";
}
else if(score >= 50){
status = "⚠ Suspicious";
color = "orange";
}
else{
status = "🚨 Dangerous";
color = "red";
}

document.getElementById("urlStatus").innerHTML =
"Status: " + status;

document.getElementById("urlStatus").style.color =
color;

document.getElementById("urlScore").innerHTML =
"Safety Score: " + score + "/100";

if(warnings.length > 0){

document.getElementById("urlReport").innerHTML =
"<h3>Security Report</h3>" +
warnings.map(item =>
`<p>• ${item}</p>`
).join("");

}
else{

document.getElementById("urlReport").innerHTML =
"<p>✔ No suspicious indicators found.</p>";

}

}document.getElementById("urlScanBar").style.width="0%";

setTimeout(()=>{

document.getElementById("urlScanBar").style.width="100%";

},100);