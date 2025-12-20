const elements = document.querySelectorAll("section, header");

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.8s ease";
});

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

const photo = document.querySelector(".profile-photo");

window.addEventListener("load", () => {
  setTimeout(() => {
    photo.classList.add("show");
  }, 300);
});

