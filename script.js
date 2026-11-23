
/* =========================
   1. HTML ELEMENTS
========================= */

const firstScreen = document.getElementById("firstScreen");
const nameScreen = document.getElementById("nameScreen");
const thankScreen = document.getElementById("thankScreen");

const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");

const nameInput = document.getElementById("nameInput");
const surpriseBtn = document.getElementById("surpriseBtn");

const thankHeading = document.getElementById("thankHeading");
const errorMessage = document.getElementById("errorMessage");

const replayBtn = document.getElementById("replayBtn");
const stars = document.getElementById("stars");
const welcomeBtn = document.getElementById("welcomeBtn");


/* =========================
   2. WHATSAPP NUMBER
========================= */

// Apna WhatsApp number country code ke saath
const myWhatsAppNumber = "919301285148";


/* =========================
   3. BACKGROUND STARS
========================= */

function createStars() {

    if (!stars) return;

    stars.innerHTML = "";

    for (let i = 0; i < 70; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";

        stars.appendChild(star);
    }
}

createStars();


/* =========================
   4. OPEN MY LETTER
========================= */

openBtn.addEventListener("click", function () {

    envelope.classList.add("open");

    openBtn.disabled = true;

    setTimeout(function () {

        firstScreen.classList.add("hidden");

        nameScreen.classList.remove("hidden");

        nameInput.focus();

    }, 900);

});


/* =========================
   5. SHOW SURPRISE
========================= */

function showSurprise() {

    const name = nameInput.value.trim();

    if (name === "") {

        errorMessage.textContent =
            "Please enter your name first! ✨";

        nameInput.focus();

        return;
    }

    errorMessage.textContent = "";

    thankHeading.textContent =
        "Thank You, " + name + " ❤️";


    /* WhatsApp Message */

    const message =
        "Hey " + name +
        "! Thank you for your wishes! ❤️\n\nWELCOME 👋";

    const whatsappURL =
        "https://wa.me/" +
        myWhatsAppNumber +
        "?text=" +
        encodeURIComponent(message);

    welcomeBtn.href = whatsappURL;


    /* Screen Change */

    nameScreen.classList.add("hidden");

    thankScreen.classList.remove("hidden");


    /* Confetti */

    createConfetti();

}


/* =========================
   6. SURPRISE BUTTON
========================= */

surpriseBtn.addEventListener("click", showSurprise);


/* =========================
   7. ENTER KEY
========================= */

nameInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        showSurprise();

    }

});


/* =========================
   8. CONFETTI
========================= */

function createConfetti() {

    const emojis = ["✨", "💖", "🎉", "💕", "🌸", "🎊"];

    for (let i = 0; i < 35; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            Math.random() * 15 + 15 + "px";

        confetti.style.zIndex = "100";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 3;

        confetti.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform: "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }
            ],

            {
                duration: duration * 1000,
                easing: "linear"
            }

        );

        setTimeout(function () {

            confetti.remove();

        }, duration * 1000);

    }

}


/* =========================
   9. REPLAY
========================= */

replayBtn.addEventListener("click", function () {

    thankScreen.classList.add("hidden");

    nameScreen.classList.add("hidden");

    firstScreen.classList.remove("hidden");


    /* Reset Envelope */

    envelope.classList.remove("open");

    openBtn.disabled = false;


    /* Reset Input */

    nameInput.value = "";

    errorMessage.textContent = "";


    /* Reset WhatsApp Link */

    welcomeBtn.href = "#";


    /* Refresh Stars */

    createStars();

});


/* =========================
   10. WHATSAPP BUTTON
========================= */

// WhatsApp button HTML mein href pehle se
// showSurprise() ke andar set kiya ja chuka hai.

