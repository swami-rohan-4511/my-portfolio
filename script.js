const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const light = {
  '--bg': '#f7f7fb',
  '--elev': '#ffffff',
  '--text': '#0d0e14',
  '--muted': '#535665',
  '--accent': '#5f8bff',
  '--border': '#e5e7f0'
};

const dark = {
  '--bg': '#0b0b10',
  '--elev': '#111118',
  '--text': '#e6e6ea',
  '--muted': '#a5a6ab',
  '--accent': '#7c5cff',
  '--border': '#1f2030'
};

function applyTheme(theme) {
  Object.entries(theme).forEach(([k, v]) => root.style.setProperty(k, v));
}

function getSavedTheme() {
  return localStorage.getItem('theme') || 'dark';
}

function setTheme(mode) {
  applyTheme(mode === 'light' ? light : dark);
  localStorage.setItem('theme', mode);
}

setTheme(getSavedTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = getSavedTheme() === 'light' ? 'dark' : 'light';
    setTheme(next);
    themeToggle.textContent = next === 'light' ? '☀' : '☾';
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href) return;
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Mark active link based on current page
const current = location.pathname.split('/').slice(-1)[0] || 'index.html';
document.querySelectorAll('.nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === current) link.classList.add('active');
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.site-header .nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
  });
  // Close menu when clicking a link
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}


