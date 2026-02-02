const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainText = document.getElementById('mainText');
const teaseText = document.getElementById('teaseText');
const buttons = document.getElementById('buttons');
const celebration = document.getElementById('celebration');
const confettiContainer = document.getElementById('confetti');
const yesSound = document.getElementById('yesSound');
const noSound = document.getElementById('noSound');

const teaseMessages = [
  "Arey yaar 😏 thoda try toh karo!",
  "Nice try… but NO is disabled 😂",
  "इतनी आसानी से नहीं मानूँगा 😜",
  "Just click YES already 😌",
  "Game over for NO 😎",
  "No button thak gaya, tum nahi?"
];

const gifs = [
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
  "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
  "https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif"
];

noBtn.addEventListener('click', () => {
  noSound.play();
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  teaseText.textContent = teaseMessages[Math.floor(Math.random() * teaseMessages.length)];
  teaseText.classList.remove('hidden');
});

yesBtn.addEventListener('click', () => {
  yesSound.play();
  mainText.innerHTML = "Knew it 😏 You won’t click NO anyway!";
  buttons.classList.add('hidden');
  teaseText.classList.add('hidden');
  celebration.classList.remove('hidden');
  celebration.innerHTML = "";

  const gifCount = Math.floor(Math.random() * 2) + 2;
  for (let i = 0; i < gifCount; i++) {
    const img = document.createElement('img');
    img.src = gifs[Math.floor(Math.random() * gifs.length)];
    celebration.appendChild(img);
  }

  launchConfetti();
});

function launchConfetti() {
  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}
