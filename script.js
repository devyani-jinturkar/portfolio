document.getElementById("navToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("open");
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("navLinks").classList.remove("open");
  });
});

var heroShowreel = document.getElementById("heroShowreel");
if (heroShowreel) {
  var heroClips = ["Content/1_Video 1.mp4", "Content/2_Video 2.mp4"];
  var heroClipIndex = 0;
  heroShowreel.addEventListener("ended", function () {
    heroClipIndex = (heroClipIndex + 1) % heroClips.length;
    heroShowreel.src = heroClips[heroClipIndex];
    heroShowreel.play();
  });
}
