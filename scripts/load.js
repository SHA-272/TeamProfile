document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/members.json")
    .then((response) => response.json())
    .then((members) => {
      let membersList = document.getElementById("members-list");
      members.forEach((member) => {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.className = "member-link";
        link.href = member.link;
        link.innerHTML = `<strong>${member.name}</strong>`;
        listItem.appendChild(link);
        listItem.innerHTML += ` ${member.role}`;
        let quote = document.createElement("p");
        quote.textContent = member.quote;
        listItem.appendChild(quote);
        membersList.appendChild(listItem);
      });
    });

  fetch("./data/events.json")
    .then((response) => response.json())
    .then((events) => {
      events.sort((a, b) => new Date(b.date) - new Date(a.date));
      let eventsList = document.getElementById("events-list");
      events.forEach((event) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<strong><a class="member-link">${event.name}</a></strong> ${event.date} - ${event.score} points (${event.place}th)`;
        eventsList.appendChild(listItem);
      });
    });
});
