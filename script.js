const switcher = document.getElementById('themeSwitch');
switcher.addEventListener('change', function () {
  document.body.classList.toggle('dark', this.checked);
});
