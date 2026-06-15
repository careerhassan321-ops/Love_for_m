const loginBtn = document.getElementById("loginBtn");
const loginPage = document.getElementById("loginPage");
const proposalPage = document.getElementById("proposalPage");
const successPage = document.getElementById("successPage");
const loginMessage = document.getElementById("loginMessage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const bgMusic = document.getElementById("bgMusic");

const funnyMessages = [
"Are you sure? 🥺",
"Please think again ❤️",
"Mahnoor, one more chance 💍",
"I brought flowers 🌹",
"You are my queen 👑",
"Pretty please? 😊",
"My heart says YES ❤️",
"Forever sounds beautiful with you 💕",
"I promise unlimited love 💖"
];

let msgIndex = 0;

/* LOGIN */

loginBtn.addEventListener("click", () => {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if(
        username === "DodoKissBuggu" &&
        password === "26May2026"
    ){

        loginPage.style.display = "none";

        proposalPage.style.display = "flex";

        bgMusic.play().catch(()=>{});

        createFloatingHearts();

    }else{

        loginMessage.innerHTML =
        "❌ Wrong Username or Password";

    }

});

/* NO BUTTON */

function moveNoButton(){

    const maxX =
        window.innerWidth - 150;

    const maxY =
        window.innerHeight - 120;

    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", () => {

    moveNoButton();

    document.getElementById(
        "funnyMessage"
    ).innerHTML =
        funnyMessages[
            msgIndex %
            funnyMessages.length
        ];

    msgIndex++;

});

noBtn.addEventListener("click", () => {

    moveNoButton();

    document.getElementById(
        "funnyMessage"
    ).innerHTML =
        funnyMessages[
            msgIndex %
            funnyMessages.length
        ];

    msgIndex++;

});

/* YES BUTTON */

yesBtn.addEventListener("click", () => {

    proposalPage.style.display = "none";

    successPage.style.display = "block";

    createFireworks();

    generateReasons();

});

/* HEARTS */

function createFloatingHearts(){

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() *
            window.innerWidth +
            "px";

        heart.style.animationDuration =
            (4 + Math.random() * 4)
            + "s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 8000);

    }, 300);

}

/* FIREWORKS */

function createFireworks(){

    setInterval(() => {

        const centerX =
            Math.random() *
            window.innerWidth;

        const centerY =
            Math.random() *
            window.innerHeight;

        for(let i=0;i<30;i++){

            const firework =
                document.createElement("div");

            firework.className =
                "firework";

            firework.style.left =
                centerX + "px";

            firework.style.top =
                centerY + "px";

            firework.style.setProperty(
                "--x",
                (Math.random()*400-200)
                + "px"
            );

            firework.style.setProperty(
                "--y",
                (Math.random()*400-200)
                + "px"
            );

            document.body.appendChild(
                firework
            );

            setTimeout(() => {

                firework.remove();

            }, 1200);

        }

    }, 1000);

}

/* 100 REASONS */

function generateReasons(){

    const reasonsList =
        document.getElementById("reasonsList");

    reasonsList.innerHTML = "";

    const reasons = [

    "❤️ Your smile makes my day brighter.",
    "❤️ You always understand me.",
    "❤️ You make ordinary moments special.",
    "❤️ You support my dreams.",
    "❤️ Your laugh is my favorite sound.",
    "❤️ You make me feel loved.",
    "❤️ You are my best friend.",
    "❤️ You bring peace to my life.",
    "❤️ You make me a better person.",
    "❤️ I love your kind heart.",

    "❤️ You always care for others.",
    "❤️ You make me feel safe.",
    "❤️ You inspire me every day.",
    "❤️ You believe in me.",
    "❤️ You make every conversation special.",
    "❤️ You are beautiful inside and out.",
    "❤️ You make life more exciting.",
    "❤️ You are my favorite person.",
    "❤️ You never stop amazing me.",
    "❤️ You make me smile without trying.",

    "❤️ You are my happiness.",
    "❤️ You are my comfort.",
    "❤️ You make me feel complete.",
    "❤️ You are always on my mind.",
    "❤️ You make every day better.",
    "❤️ You are my greatest blessing.",
    "❤️ You make me laugh.",
    "❤️ You make hard days easier.",
    "❤️ You are my peace.",
    "❤️ You are my forever.",

    "❤️ I love your honesty.",
    "❤️ I love your loyalty.",
    "❤️ I love your caring nature.",
    "❤️ I love your personality.",
    "❤️ I love your confidence.",
    "❤️ I love your strength.",
    "❤️ I love your kindness.",
    "❤️ I love your patience.",
    "❤️ I love your intelligence.",
    "❤️ I love your beautiful soul.",

    "❤️ You make every memory special.",
    "❤️ I love spending time with you.",
    "❤️ You make me feel lucky.",
    "❤️ You always support me.",
    "❤️ You make life meaningful.",
    "❤️ You bring joy into my life.",
    "❤️ You make me proud.",
    "❤️ I trust you completely.",
    "❤️ You are my safe place.",
    "❤️ You make me believe in love.",

    "❤️ You are my dream come true.",
    "❤️ I admire your strength.",
    "❤️ I love your beautiful eyes.",
    "❤️ I love your sweet voice.",
    "❤️ You always make me smile.",
    "❤️ You make every day worth living.",
    "❤️ You are my sunshine.",
    "❤️ You make me feel special.",
    "❤️ You are my greatest gift.",
    "❤️ You are my favorite hello.",

    "❤️ You are my hardest goodbye.",
    "❤️ You make every moment magical.",
    "❤️ You understand me deeply.",
    "❤️ You always stand by me.",
    "❤️ You are my biggest blessing.",
    "❤️ I love your caring heart.",
    "❤️ You make my world complete.",
    "❤️ You are my future.",
    "❤️ You are my present.",
    "❤️ You are my forever love.",

    "❤️ I love the way you laugh.",
    "❤️ I love the way you care.",
    "❤️ I love your positivity.",
    "❤️ You make every day brighter.",
    "❤️ You always encourage me.",
    "❤️ You make me feel valued.",
    "❤️ You are my inspiration.",
    "❤️ You are my motivation.",
    "❤️ You are my happiness.",
    "❤️ You are my soulmate.",

    "❤️ I love sharing memories with you.",
    "❤️ You make every journey better.",
    "❤️ You are my favorite blessing.",
    "❤️ You make me stronger.",
    "❤️ You always lift me up.",
    "❤️ You make my heart happy.",
    "❤️ I love your beautiful smile.",
    "❤️ You make life sweeter.",
    "❤️ You are everything I hoped for.",
    "❤️ You are the best thing in my life.",

    "❤️ Because every day with you feels like a gift.",
    "❤️ Because you make my world brighter.",
    "❤️ Because you are my one and only.",
    "❤️ Because I love you more every day.",
    "❤️ Because you are my forever person.",
    "❤️ Because life is better with you.",
    "❤️ Because you complete my heart.",
    "❤️ Because you are my dream girl.",
    "❤️ Because you are my forever happiness.",
    "💍 Reason 100: Because I want to spend the rest of my life with you, Mahnoor."
    ];

    reasons.forEach(reason => {

        const li =
            document.createElement("li");

        li.innerText = reason;

        reasonsList.appendChild(li);

    });

}
