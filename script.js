const yesBtn = document.getElementById('yesBtn');
const content = document.getElementById('content');


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