// Toggle dark/light theme
const toggleBtn = document.querySelector(".toggle-theme");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  toggleBtn.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
});

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typing effect
const typingText = "Ernest";
let i = 0;
function typingLoop() {
  if (i < typingText.length) {
    document.getElementById("typing").textContent += typingText.charAt(i);
    i++;
    setTimeout(typingLoop, 200);
  } else {
    setTimeout(() => {
      document.getElementById("typing").textContent = "";
      i = 0;
      typingLoop();
    }, 1500);
  }
}
typingLoop();