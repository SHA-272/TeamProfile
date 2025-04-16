fetch("./data/members.json")
  .then((response) => response.json())
  .then((data) => {
    const membersContainer = document.getElementById("members");
    data.forEach((member) => {
      const memberDiv = document.createElement("div");
      memberDiv.classList.add("member");
      memberDiv.innerHTML = `
                <h2><a href="${member.link}" target="_blank">${member.name}</a></h2>
                <p class="role">${member.role}</p>
                <p><em>"${member.quote}"</em></p>
            `;
      membersContainer.appendChild(memberDiv);
    });
  })
  .catch((error) => console.error("Error loading members:", error));

fetch("./data/veterans.json")
  .then((response) => response.json())
  .then((data) => {
    const membersContainer = document.getElementById("veterans");
    data.forEach((member) => {
      const memberDiv = document.createElement("div");
      memberDiv.classList.add("member");
      memberDiv.innerHTML = `
                <h2><a href="${member.link}" target="_blank">${member.name}</a></h2>
                <p class="role">${member.role}</p>
                <p><em>"${member.quote}"</em></p>
            `;
      membersContainer.appendChild(memberDiv);
    });
  })
  .catch((error) => console.error("Error loading members:", error));

fetch("./data/events.json")
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    const eventsContainer = document.getElementById("events");
    data.forEach((event) => {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("event");
      eventDiv.innerHTML = `
                <h2>${event.name}</h2>
                <p class="score"><strong>Score:</strong> ${event.score} - <strong>Place:</strong> ${event.place}</p>
                <p>${event.date}</p>
            `;
      eventsContainer.appendChild(eventDiv);
    });
  })
  .catch((error) => console.error("Error loading events:", error));
