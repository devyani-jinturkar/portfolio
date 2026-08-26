document.getElementById("navToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("open");
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("navLinks").classList.remove("open");
  });
});
