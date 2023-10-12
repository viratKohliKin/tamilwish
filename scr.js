window.addEventListener('load', () => {
  console.log('Page loaded. Setting timeout to play audio after 5 seconds...');
  setTimeout(playAudio, 5000);
});

function playAudio() {
  const audio = document.getElementById('birthdayAudio');
  console.log('Playing audio...');
  audio.loop = true;  // Set to loop continuously
  audio.play();
}

window.addEventListener('beforeunload', () => {
  const audio = document.getElementById('birthdayAudio');
  console.log('Pausing audio...');
  audio.pause();
});
