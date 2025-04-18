const messages = [
    "Are You Sure?",
    "Really Sure??",
    "Are You Sure 100%?",
    "Please Think About It My Wiffy...",
    "Pookie Please!",
    "If You say No I Will Be Really Sad...",
    "I Will Be very Sad My Bouuuu...",
    "I Will Be Very Very Very Very Sad My Baby Bou...",
    "Its Your Last Oppertunity 💗"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}