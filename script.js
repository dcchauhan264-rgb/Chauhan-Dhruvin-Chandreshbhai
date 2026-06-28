console.log("CyberGuard Home Loaded Successfully");const text = "Cyber Security Toolkit";
let i = 0;

function typing() {

    if (i < text.length) {

        document.querySelector(".hero h1").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,100);

    }

}

document.querySelector(".hero h1").innerHTML="";

typing();