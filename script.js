document.addEventListener('DOMContentLoaded', () => {
    const players = [
        {
            id: 'marcos306',
            name: 'marcos306#euw',
            elo: 'Platino IV',
            opgg: 'https://euw.op.gg/summoner/userName=marcos306',
            stream: 'https://twitch.tv/marcos306'
        },
        {
            id: 'kuzanero',
            name: 'kuzanero#euw',
            elo: 'Oro II',
            opgg: 'https://euw.op.gg/summoner/userName=kuzanero',
            stream: 'https://twitch.tv/kuzanero'
        },
        {
            id: 'CocoBoymrs',
            name: 'CocoBoymrs#9537',
            elo: 'Diamante I',
            opgg: 'https://euw.op.gg/summoner/userName=CocoBoymrs',
            stream: 'https://twitch.tv/CocoBoymrs'
        }
    ];

    players.forEach(player => {
        const playerCard = document.getElementById(player.id);
        playerCard.querySelector('h2').textContent = player.name;
        playerCard.querySelector('a').href = player.opgg;
        playerCard.querySelector('.elo span').textContent = player.elo;
        playerCard.querySelector('a:nth-of-type(2)').href = player.stream;
    });

    document.getElementById('reset-button').addEventListener('click', () => {
        location.reload();
    });
});
