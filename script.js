let current = 1; // 1 = main, 0 = left

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') current = 0;
  if (e.key === 'ArrowRight') current = 1;
  document.getElementById('container').style.transform = `translateX(-${100 * (1 - current)}vw)`;
});
