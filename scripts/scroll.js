let isScrolling = false;
let currentSection = 0;

const sections = document.querySelectorAll(".section");

document.addEventListener("keydown", function (event) {
  if (isScrolling) return;

  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    scrollPage(1);
  } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    scrollPage(-1);
  }
});

window.onresize = (event) => {
  scrollPageTo(currentSection);
};

document.querySelectorAll("nav ul li a").forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    scrollPageTo(index);
  });
});

function scrollPage(direction) {
  isScrolling = true;
  currentSection += direction;

  if (currentSection < 0) {
    currentSection = 0;
  } else if (currentSection >= sections.length) {
    currentSection = sections.length - 1;
  }

  sections[currentSection].scrollIntoView({
    behavior: "smooth",
  });

  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}

function scrollPageTo(index) {
  isScrolling = true;
  currentSection = index;

  sections[currentSection].scrollIntoView({
    behavior: "smooth",
  });

  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}
