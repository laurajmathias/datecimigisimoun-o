

const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide =>
        slide.classList.remove("active")
    );

    indicators.forEach(indicator =>
        indicator.classList.remove("active")
    );

    slides[index].classList.add("active");
    indicators[index].classList.add("active");
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

// ==========================
// CORAÇÕES FLUTUANDO
// ==========================

const heartsContainer =
document.querySelector(".hearts-container");

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left =
    Math.random() * window.innerWidth + "px";

    heart.style.fontSize =
    Math.random() * 20 + 10 + "px";

    heart.style.animationDuration =
    Math.random() * 6 + 6 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 400);

// ==========================
// BOTÃO NO FUGITIVO
// ==========================

const noBtn =
document.getElementById("noBtn");

function moveNoButton(){

    const maxX =
    window.innerWidth - noBtn.offsetWidth - 20;

    const maxY =
    window.innerHeight - noBtn.offsetHeight - 20;

    const randomX =
    Math.random() * maxX;

    const randomY =
    Math.random() * maxY;

    noBtn.style.position = "fixed";

    noBtn.style.left =
    randomX + "px";

    noBtn.style.top =
    randomY + "px";
}

// Desktop
noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);

// Mobile
noBtn.addEventListener(
    "touchstart",
    function(e){
        e.preventDefault();
        moveNoButton();
    }
);

// ==========================
// ETAPA DATA
// ==========================

const yesBtn =
document.getElementById("yesBtn");

const dateSection =
document.getElementById("dateSection");

yesBtn.addEventListener("click", () => {

    dateSection.classList.remove(
        "step-hidden"
    );

    dateSection.scrollIntoView({
        behavior:"smooth"
    });

});

// ==========================
// CONTINUAR
// ==========================

const continueBtn =
document.getElementById("continueBtn");

const dateInput =
document.getElementById("dateInput");

const timeInput =
document.getElementById("timeInput");

const planSection =
document.getElementById("planSection");

continueBtn.addEventListener(
    "click",
    () => {

        if(
            !dateInput.value ||
            !timeInput.value
        ){
            alert(
                "Please choose a date and time ❤️"
            );
            return;
        }

        planSection.classList.remove(
            "step-hidden"
        );

        planSection.scrollIntoView({
            behavior:"smooth"
        });

    }
);

// ==========================
// SELEÇÃO DOS CARDS
// ==========================

const planCards =
document.querySelectorAll(".plan-card");

let selectedPlan = "";

planCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            planCards.forEach(c =>
                c.classList.remove(
                    "selected"
                )
            );

            card.classList.add(
                "selected"
            );

            selectedPlan =
            card.dataset.plan;

        }
    );

});

// ==========================
// MODAL FINAL
// ==========================

const confirmBtn =
document.getElementById("confirmBtn");

const modal =
document.getElementById("successModal");

const summaryText =
document.getElementById("summaryText");

confirmBtn.addEventListener(
    "click",
    () => {

        if(selectedPlan === ""){
            alert(
                "Choose a plan first ❤️"
            );
            return;
        }

        summaryText.innerHTML = `
            Date: <strong>${dateInput.value}</strong>
            <br><br>

            Time: <strong>${timeInput.value}</strong>
            <br><br>

            Plan: <strong>${selectedPlan}</strong>
            <br><br>

            Our date is officially scheduled!
        `;

        modal.classList.add("show");

        createConfetti();
        createHeartExplosion();

    }
);

// ==========================
// FECHAR MODAL
// ==========================

const closeModal =
document.getElementById("closeModal");

closeModal.addEventListener(
    "click",
    () => {

        modal.classList.remove("show");

    }
);

// ==========================
// EXPLOSÃO DE CORAÇÕES
// ==========================

function createHeartExplosion(){

    for(let i = 0; i < 40; i++){

        const heart =
        document.createElement("div");

        heart.innerHTML = "❤";

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

        heart.style.color =
        "#ff6fa9";

        heart.style.pointerEvents =
        "none";

        heart.style.zIndex = "9999";

        document.body.appendChild(
            heart
        );

        const x =
        (Math.random() - 0.5) * 800;

        const y =
        (Math.random() - 0.5) * 800;

        heart.animate(
            [
                {
                    transform:
                    "translate(0,0)",
                    opacity:1
                },
                {
                    transform:
                    `translate(${x}px,${y}px)`,
                    opacity:0
                }
            ],
            {
                duration:2000,
                easing:"ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 2000);

    }
}

// ==========================
// CONFETES
// ==========================

function createConfetti(){

    const container =
    document.getElementById(
        "confetti-container"
    );

    const colors = [
        "#ff6fa9",
        "#ffd6e7",
        "#ffffff",
        "#ffd88d"
    ];

    for(let i = 0; i < 120; i++){

        const confetti =
        document.createElement("div");

        confetti.classList.add(
            "confetti"
        );

        confetti.style.left =
        Math.random() * 100 + "%";

        confetti.style.background =
        colors[
            Math.floor(
                Math.random()
                * colors.length
            )
        ];

        confetti.style.animationDuration =
        Math.random() * 3 + 2 + "s";

        confetti.style.width =
        Math.random() * 10 + 5 + "px";

        confetti.style.height =
        Math.random() * 10 + 5 + "px";

        container.appendChild(
            confetti
        );

        setTimeout(() => {
            confetti.remove();
        }, 5000);

    }
}
