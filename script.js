const yesBtn = document.getElementById('yesBtn');
const content = document.getElementById('content');
const bgMusic = document.getElementById('bgMusic');

console.log('bgMusic element:', bgMusic);
console.log('Audio src:', bgMusic ? bgMusic.querySelector('source').src : 'not found');

// Check for audio errors
if (bgMusic) {
  bgMusic.addEventListener('error', (e) => {
    console.error('Audio error:', e, 'Error code:', bgMusic.error?.code);
  });
  bgMusic.addEventListener('canplay', () => {
    console.log('Audio can play now');
  });
}

// Unmute music on first user interaction
document.addEventListener('click', () => {
  console.log('User clicked, bgMusic muted:', bgMusic?.muted);
  if (bgMusic) {
    bgMusic.muted = false;
    bgMusic.volume = 0.5;
    const playPromise = bgMusic.play();
    if (playPromise) {
      playPromise.then(() => {
        console.log('Music is now playing');
      }).catch(error => {
        console.error('Play failed:', error);
      });
    }
  }
}, { once: true });

yesBtn.addEventListener('click', () => {
content.classList.remove('hidden');
document.getElementById('question').classList.add('hidden');
startHearts();
});



// Accordion logic
const toggles = document.querySelectorAll('.toggle');


toggles.forEach(button => {
button.addEventListener('click', () => {
const panel = button.nextElementSibling;


document.querySelectorAll('.panel').forEach(p => {
if (p !== panel) p.classList.remove('active');
});


panel.classList.toggle('active');
});
});

// Floating hearts generator
function createHeart() {
const heart = document.createElement('div');
heart.className = 'heart';
heart.textContent = '❤️';
heart.style.left = Math.random() * 100 + 'vw';
heart.style.animationDuration = 3 + Math.random() * 2 + 's';
document.body.appendChild(heart);


setTimeout(() => heart.remove(), 5000);
}


function startHearts() {
setInterval(createHeart, 400);
}