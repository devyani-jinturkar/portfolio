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

// Nudge the hero video if the browser deferred its autoplay.
document.querySelectorAll("video[autoplay]").forEach(function (video) {
  var tryPlay = function () {
    if (video.paused) {
      video.play().catch(function () {});
    }
  };
  tryPlay();
  video.addEventListener("loadeddata", tryPlay);
});

// Load and play the gallery videos only while they are on screen. Keeps the
// page light: the ~10 clips no longer all download and decode on page load.
var lazyVideos = document.querySelectorAll("video[data-src]");
if ("IntersectionObserver" in window) {
  var videoObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      if (entry.isIntersecting) {
        if (!video.src) {
          video.src = video.getAttribute("data-src");
        }
        video.play().catch(function () {});
      } else if (!video.paused) {
        video.pause();
      }
    });
  }, { threshold: 0.25, rootMargin: "150px 0px" });
  lazyVideos.forEach(function (video) {
    videoObserver.observe(video);
  });
} else {
  lazyVideos.forEach(function (video) {
    video.src = video.getAttribute("data-src");
    video.play().catch(function () {});
  });
}
