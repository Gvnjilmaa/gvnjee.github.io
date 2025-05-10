const switcher = document.getElementById('themeSwitch');
if (switcher) {
  switcher.addEventListener('change', function () {
    document.body.classList.toggle('dark', this.checked);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupLinks();
  loadPage('home');
});

function setupLinks() {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      loadPage(page);
    });
  });
}

function loadPage(page) {
  const file = `${page}.html`;
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;
    })
    .catch(err => {
      document.getElementById('content').innerHTML = "<p>Хуудас ачаалагдахад алдаа гарлаа.</p>";
    });
}
