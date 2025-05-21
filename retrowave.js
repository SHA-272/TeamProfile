// Загрузка данных о членах команды
async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();
    const membersContainer = document.getElementById("members");

    members.forEach((member) => {
      const memberCard = document.createElement("div");
      memberCard.className = "member-card";
      memberCard.innerHTML = `
        <h3 class="member-name">${member.name}</h3>
        <p class="member-role">${member.role}</p>
        <p class="member-quote">"${member.quote}"</p>
        <a href="${member.link}" target="_blank" class="member-link">Contact</a>
      `;
      membersContainer.appendChild(memberCard);
    });
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

// Загрузка данных о ветеранах
async function loadVeterans() {
  try {
    const response = await fetch("data/veterans.json");
    const veterans = await response.json();
    const veteransContainer = document.getElementById("veterans");

    veterans.forEach((veteran) => {
      const veteranCard = document.createElement("div");
      veteranCard.className = "member-card";
      veteranCard.innerHTML = `
        <h3 class="member-name">${veteran.name}</h3>
        <p class="member-role">${veteran.role}</p>
        <p class="member-quote">"${veteran.quote}"</p>
        <a href="${veteran.link}" target="_blank" class="member-link">Contact</a>
      `;
      veteransContainer.appendChild(veteranCard);
    });
  } catch (error) {
    console.error("Error loading veterans:", error);
  }
}

// Загрузка данных о событиях
async function loadEvents() {
  try {
    const response = await fetch("data/events.json");
    const events = await response.json();
    const eventsContainer = document.getElementById("events");

    events.forEach((event) => {
      const eventCard = document.createElement("div");
      eventCard.className = "event-card";
      eventCard.innerHTML = `
        <h3 class="event-name">${event.name}</h3>
        <div class="event-details">
          <span class="event-place">Place: ${event.place}</span>
          <span class="event-score">Score: ${event.score}</span>
        </div>
      `;
      eventsContainer.appendChild(eventCard);
    });
  } catch (error) {
    console.error("Error loading events:", error);
  }
}

// Эффект глитч-эффекта для текста
function setupGlitchEffect() {
  const glitchTexts = document.querySelectorAll(".glitch-text");

  glitchTexts.forEach((text) => {
    const content = text.textContent;
    text.setAttribute("data-text", content);
  });
}

// Загрузка всех данных при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  loadMembers();
  loadVeterans();
  loadEvents();
  setupGlitchEffect();

  // Добавление плавной прокрутки для навигации
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });
});
