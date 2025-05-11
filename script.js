// 🌓 Theme Switcher
const switcher = document.getElementById('themeSwitch');
if (switcher) {
  switcher.addEventListener('change', function () {
    document.body.classList.toggle('dark', this.checked);
  });
}

// SPA: Хуудас ачаалалт
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
  
        // Админ хуудас ачаалагдвал логин функц ажиллуулна
        if (page === "admin") {
          initAdminLogin();
        }
      })
      .catch(err => {
        document.getElementById('content').innerHTML = "<p>Хуудас ачаалагдахад алдаа гарлаа.</p>";
      });
  }  

// 🛡️ Админ нэвтрэх логик
function initAdminLogin() {
  const loginForm = document.getElementById('adminLoginForm');
  if (!loginForm) return; // Хэрэв форм байхгүй бол гарах

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    if (username === "admin" && password === "1234") {
      document.getElementById('admin-login-section').style.display = 'none';
      document.getElementById('admin-control-section').style.display = 'block';
      document.getElementById('loginError').style.display = 'none';
    } else {
      document.getElementById('loginError').style.display = 'block';
    }
  });
}

function logoutAdmin() {
  document.getElementById('admin-login-section').style.display = 'block';
  document.getElementById('admin-control-section').style.display = 'none';
  document.getElementById('adminLoginForm').reset();
}
