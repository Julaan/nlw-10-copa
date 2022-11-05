function createGame(team1, hour, team2) {
  return `
    <li>
      <img src="./assets/icon-${team1}.svg" alt="${team1} flag" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${team2}.svg" alt="${team2} flag" />
    </li>
  `
}

let delay = -0.5;
function createCard(date, day, games) {
  delay = delay + 0.5;
  return `
  <div class="card" style="animation-delay:${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
    createCard("24/11", "thursday", createGame("brazil", "16:00", "serbia")) +    createCard(
      "28/11",
      "monday",
      createGame("switzerland", "13:00", "brazil") +
        createGame("portugal", "16:00", "uruguay")
    ) +
    createCard("02/12", "friday", createGame("brazil", "16:00", "cameroon"))
 
