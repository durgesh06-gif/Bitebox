function requireLogin() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

function login() {

  let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error");

    if (email === "admin" && password === "123") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", email);
        window.location.href = "index.html";
    }
    else {
        errorMessage.textContent = "Invalid email or password.";
    }
}

function togglePassword() {
    const password = document.getElementById("password");
    const toggle = document.querySelector(".password-toggle");
    const icon = toggle.querySelector("i");
    const showingPassword = password.type === "text";

    password.type = showingPassword ? "password" : "text";
    toggle.setAttribute("aria-label", showingPassword ? "Show password" : "Hide password");
    icon.classList.toggle("fa-eye", showingPassword);
    icon.classList.toggle("fa-eye-slash", !showingPassword);
}

function togfun() {
    const menu = document.getElementById("fech");
    const toggle = document.getElementById("menutoggle");

  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
}