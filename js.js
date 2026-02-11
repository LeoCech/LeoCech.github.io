const noButton = document.querySelector("#no button");
const yesButton = document.querySelector("#yes button");
const main = document.getElementById("main");
const end = document.getElementById("end");

let scaleNo = 1;
let scaleYes = 1;

noButton.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    noButton.style.transform = `translate(${x}px, ${y}px) scale(${scaleNo})`;
});

noButton.addEventListener("click", () => {
    scaleNo -= 0.1;
    scaleYes += 0.1;

    if (scaleNo <= 0.3) {
        noButton.style.display = "none";
    }

    noButton.style.transform = `scale(${scaleNo})`;
    yesButton.style.transform = `scale(${scaleYes})`;
});

yesButton.addEventListener("click", () => {
    main.classList.add("hidden");

    setTimeout(() => {
        main.style.display = "none";
        
        end.style.display = "block"; 
        setTimeout(() => {
            end.classList.remove("hidden");
        }, 10);

    }, 500);
    createHearts();
});

function createHearts() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";

        const duration = Math.random() * 3 + 2;
        heart.style.animationDuration = duration + "s";

        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}