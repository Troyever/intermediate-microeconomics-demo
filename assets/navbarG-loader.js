function loadNavbar() {
  fetch("/intermediate-microeconomics-project/assets/navbarG.html")
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById("navbar-container");
      if (container) container.innerHTML = html;
    document.dispatchEvent(new Event("navbar-loaded"));
})
    .catch(err => console.error("Navbar load error:", err));
}

document.addEventListener("DOMContentLoaded", loadNavbar);
