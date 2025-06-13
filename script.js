// Przejście z index.html na left.html
if (document.body.querySelector('h1')?.textContent === 'Ekran główny') {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      window.location.href = 'left.html';
    }
  });

  let touchstartX = 0;
  let touchendX = 0;

  document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    if (touchstartX - touchendX > 50) {
      window.location.href = 'left.html';
    }
  });
}

// Przejście z left.html na index.html i obsługa przycisku
if (document.body.querySelector('h1')?.textContent === 'Ekran lewy') {
  document.getElementById('showInfo').addEventListener('click', () => {
    document.getElementById('infoText').style.display = 'block';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      window.location.href = 'index.html';
    }
  });

  let touchstartX = 0;
  let touchendX = 0;

  document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    if (touchendX - touchstartX > 50) {
      window.location.href = 'index.html';
    }
  });
}



/* let current = 1; // startujemy od ekranu głównego

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
*/
