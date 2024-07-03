function startChallenge() {
    alert('El desafío ha comenzado. ¡Buena suerte, invocador!');
}

// Datos de ejemplo para la tabla de clasificación
const leaderboardData = [
    { position: 1, summoner: 'Invocador1', points: 1500, region: 'lan' },
    { position: 2, summoner: 'Invocador2', points: 1400, region: 'lan' },
    { position: 3, summoner: 'Invocador3', points: 1300, region: 'lan' },
    { position: 4, summoner: 'kuzanero', points: 1250, region: 'euw' } // Añadido kuzanero
];

const leaderboardBody = document.getElementById('leaderboardBody');

leaderboardData.forEach(player => {
    const row = document.createElement('tr');
    const opggLink = `https://www.op.gg/summoners/${player.region}/${encodeURIComponent(player.summoner)}`;
    row.innerHTML = `<td>${player.position}</td><td><a href="${opggLink}" target="_blank">${player.summoner}</a></td><td>${player.points}</td>`;
    leaderboardBody.appendChild(row);
});
