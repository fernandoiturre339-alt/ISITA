const startButton = document.getElementById("startButton");
const welcome = document.getElementById("welcome");
const videoSection = document.getElementById("videoSection");
const video = document.getElementById("video");
const ending = document.getElementById("ending");
const heartContainer = document.getElementById("heartContainer");

startButton.addEventListener("click", () => {

    welcome.style.display = "none";
    videoSection.style.display = "flex";

    video.play();

});// Cuando termina el video
video.addEventListener("ended", () => {

    videoSection.style.display = "none";
    ending.style.display = "flex";

    createHearts();

});

// Crear corazones
function createHearts(){

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = Math.random() > 0.5 ? "🤍" : "🩷";

        heart.style.position = "absolute";
        heart.style.left = Math.random()*100 + "%";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (20 + Math.random()*25) + "px";
        heart.style.opacity = "0.9";
        heart.style.transition = "transform 8s linear, opacity 8s linear";

        heartContainer.appendChild(heart);

        requestAnimationFrame(() => {
            heart.style.transform = "translateY(-120vh)";
            heart.style.opacity = "0";
        });

        setTimeout(() => {
            heart.remove();
        },8000);

    },250);

}