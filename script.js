let current = 1; // startujemy od ekranu głównego

// ustaw transform na start
window.addEventListener('load', () => {
  document.getElementById('container').style.transform = 'translateX(-100vw)';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    current = 0;  // ekran lewy — przesunięcie 0vw
  } else if (e.key === 'ArrowRight') {
    current = 1;  // ekran główny — przesunięcie -100vw
  }
  document.getElementById('container').style.transform = `translateX(-${100 * current}vw)`;
});
