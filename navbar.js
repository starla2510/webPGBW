const toggle = document.getElementById('toggle');
const option = document.getElementById('option');

// Buka / tutup menu di mobile
toggle.addEventListener('click', () => option.classList.toggle('active'));

// Tutup menu setelah salah satu link diklik
option.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => option.classList.remove('active'));
});