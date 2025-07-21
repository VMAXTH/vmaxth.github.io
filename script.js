
let logo = document.getElementById("logo");
let dx = 2;
let dy = 2;

function animateLogo() {
    let rect = logo.getBoundingClientRect();
    let parent = document.body.getBoundingClientRect();

    if (rect.right >= parent.right || rect.left <= 0) dx = -dx;
    if (rect.bottom >= parent.bottom || rect.top <= 0) dy = -dy;

    logo.style.left = logo.offsetLeft + dx + "px";
    logo.style.top = logo.offsetTop + dy + "px";

    requestAnimationFrame(animateLogo);
}

logo.onload = animateLogo;
logo.style.position = "absolute";
logo.style.left = "0px";
logo.style.top = "0px";

function changeLanguage() {
    const lang = document.getElementById("language").value;
    alert("Выбран язык: " + lang + " (перевод можно реализовать позже)");
}
