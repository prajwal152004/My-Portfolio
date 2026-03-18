function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
const roles = [
    "IAM Engineer",
    "Cybersecurity Engineer",
    "Zero Trust Enthusiast",
    "Identity Security Builder",
    "Cricketer"
];

let speed = 100;
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    const textElements = document.querySelector(".typewriter-text");
    if (!textElements) return;

    if (charcterIndex < roles[textIndex].length) {
        textElements.innerHTML += roles[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    const textElements = document.querySelector(".typewriter-text");
    if (!textElements) return;

    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % roles.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);
