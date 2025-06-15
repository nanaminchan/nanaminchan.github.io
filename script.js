document.querySelector('.logo a').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelector('.logo').addEventListener('click', function(e) {
  if(window.innerWidth <= 767){
    e.preventDefault();
    document.querySelector('.mobile-menu').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
});
document.querySelector('.close-menu').addEventListener('click', function() {
  document.querySelector('.mobile-menu').classList.remove('active');
  document.body.style.overflow = '';
});

const track = document.querySelector(".track");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".arrow.prev");
const next = document.querySelector(".arrow.next");
let currentIndex = 0;

function updateCarousel(index) {
  currentIndex = index;
  const offset = index * -100;
  track.style.transform = `translateX(${offset}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    updateCarousel(parseInt(dot.dataset.index));
  });
});

prev.addEventListener("click", () => {
  const newIndex = (currentIndex - 1 + dots.length) % dots.length;
  updateCarousel(newIndex);
});

next.addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % dots.length;
  updateCarousel(newIndex);
});

updateCarousel(0);

document.querySelectorAll('.like, .comment').forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

// 開啟登入視窗
document.querySelectorAll('.nav-link a').forEach(link => {
  if(link.textContent.includes('用戶登入')) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('loginModal').classList.add('active');
    });
  }
});
// 關閉登入視窗
document.getElementById('closeLogin').addEventListener('click', function() {
  document.getElementById('loginModal').classList.remove('active');
});

// 手機選單的用戶登入
document.querySelector('.mobile-login-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.mobile-menu').classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById('loginModal').classList.add('active');
});

document.getElementById('closeLogin').addEventListener('click', function() {
  document.getElementById('loginModal').classList.remove('active');
});

const topBtn = document.querySelector('.top');
window.addEventListener('scroll', function() {
  if (window.scrollY > 800) { // 捲動超過500px才顯示
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});