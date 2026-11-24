const toggle = document.getElementById('toggle');
const option = document.getElementById('option');

// Buka / tutup menu di mobile
toggle.addEventListener('click', () => option.classList.toggle('active'));

// Tutup menu setelah salah satu link diklik
option.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => option.classList.remove('active'));
});


const swiper = new Swiper('.swiper', {
  speed: 700,
  loop: true,
  effect: "fade",
  fadeEffect: {
    mode: "cross-fade"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: true
});