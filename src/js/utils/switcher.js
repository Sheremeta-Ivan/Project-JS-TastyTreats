function applyTheme(themeName) {
  const themeLink = document.getElementById('theme-link');
  if (themeLink) {
    themeLink.setAttribute('href', `css/theme-${themeName}.css`);
  } else {
    console.error('Element with id="theme-link" not found on page.');
  }
}

function setThemeFromLocalStorage() {
  const storedTheme = localStorage.getItem('theme');
  const userPreferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const currentTheme = storedTheme || userPreferredTheme;
  document.documentElement.setAttribute('data-theme', currentTheme);
  const toggles = document.querySelectorAll('.input-switcher');
  toggles.forEach(function (toggle) {
    toggle.checked = currentTheme === 'dark';
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', targetTheme);
  applyTheme(targetTheme);
  const toggles = document.querySelectorAll('.input-switcher');
  toggles.forEach(function (toggle) {
    toggle.checked = targetTheme === 'dark';
  });
  localStorage.setItem('theme', targetTheme);
}

const toggles = document.querySelectorAll('.input-switcher');
toggles.forEach(function (toggle) {
  toggle.addEventListener('change', toggleTheme);
});

setThemeFromLocalStorage();
