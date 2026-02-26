const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const featuresSelect = document.getElementById("products-id");
const menuButtonImg = document.getElementById("menu-button-img");

let checkMenuButton = false;
menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("menu-opa");
    checkMenuButton = !checkMenuButton;
    menuButtonImg.src = checkMenuButton ? './tainguyen/exit-btn.png' : './tainguyen/menu-button.png';
});

const subMenu = document.querySelector(".sub-menu");

featuresSelect.addEventListener('mouseenter', () =>{
    subMenu.classList.add("sub-menu-opa");
});

featuresSelect.addEventListener('mouseleave', () =>{
    subMenu.classList.remove("sub-menu-opa");
});

// phát nhạc

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = 'PAUSE';
    playBtn.style.background = 'var(--neon-pink)';
    playBtn.style.color = 'white';
  } else {
    audio.pause();
    playBtn.innerText = 'PLAY';
    playBtn.style.background = 'var(--neon-purple)';
    playBtn.style.color = 'var(--dark-bg)';
  }
  setTrackTitle("Speechless - (Remake)");

});

audio.addEventListener('timeupdate', (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  
  currentTimeEl.innerText = formatTime(currentTime);
  if (duration) durationEl.innerText = formatTime(duration);
});

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  if (duration) {
    audio.currentTime = (clickX / width) * duration;
  }
});

function formatTime(time) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function setTrackTitle(name) {
  title.innerHTML = `${name}`;
}


// chatbox
const chatBox = document.querySelector('.chat-container');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const chatExit = document.getElementById('chat-exit');

const appendMessage = (user, text, type) => {
  const msg = document.createElement('div');
  msg.className = `message ${type}`;
  msg.innerHTML = `<span class="username">${user}:</span> ${text}`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

const sendMessage = () => {
  const text = chatInput.value.trim();
  if (text) {
      appendMessage('ME', text, 'sent');
      chatInput.value = '';
      
      setTimeout(() => {
          appendMessage('SYSTEM', 'Cảm ơn bạn đã quan tâm, chúng tôi sẽ phản hồi lại sớm nhất có thể !', 'received');
      }, 800);
  }
};

sendButton.addEventListener('click', sendMessage);

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
      sendMessage();
  }
});

appendMessage('SYSTEM', 'Chào cưng!', 'received');

chatExit.addEventListener('click', () => {
  chatBox.style.display = 'none';
});

const messButton = document.querySelector('.chat-button');

messButton.addEventListener('click', ()=>{
  chatBox.style.display = 'flex'; 
});

// contac-facebook
const contactFb = document.getElementById("contact-facebook");
contactFb.addEventListener('click', ()=>{
  window.location.href = "";
});