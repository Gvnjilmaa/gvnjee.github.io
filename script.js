document.addEventListener("DOMContentLoaded", function () {
  // Theme toggle
  const switcher = document.getElementById("switcher");
  if (switcher) {
    switcher.addEventListener("change", () => {
      document.body.classList.toggle("dark-theme", switcher.checked);
    });
  }

  // Set up navigation links
  setupLinks();
});

function setupLinks() {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.getAttribute("href");
      loadPage(page);
    });
  });
}

function loadPage(page) {
  fetch(page)
    .then(response => {
      if (!response.ok) throw new Error("Page not found");
      return response.text();
    })
    .then(data => {
      document.getElementById("content").innerHTML = data;
      if (page === "admin.html") initAdminLogin();
    })
    .catch(error => {
      document.getElementById("content").innerHTML = "<p>Хуудас ачаалагдсангүй.</p>";
      console.error("Load error:", error);
    });
}

function initAdminLogin() {
  const loginForm = document.getElementById("adminLoginForm");
  const dashboard = document.getElementById("adminDashboard");

  if (!loginForm || !dashboard) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("adminUsername").value.trim();
    const password = document.getElementById("adminPassword").value.trim();

    if (username === "admin" && password === "password") {
      loginForm.style.display = "none";
      dashboard.style.display = "block";
    } else {
      alert("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
    }
  });
}

function logoutAdmin() {
  const loginForm = document.getElementById("adminLoginForm");
  const dashboard = document.getElementById("adminDashboard");

  if (loginForm && dashboard) {
    loginForm.style.display = "block";
    dashboard.style.display = "none";
  }
}
