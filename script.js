const button = document.getElementById('openLetter');
const letter = document.getElementById('letterSection');
button.addEventListener('click', () => {
  letter.classList.add('visible');
  button.textContent = 'Tu carta está aquí ❤️';
  button.disabled = true;
  letter.scrollIntoView({behavior: 'smooth', block: 'start'});
});
