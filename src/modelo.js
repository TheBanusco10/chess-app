function getApp() {

    return document.getElementById('app');

}

function getTopJugadores() {

    fetch('https://api.chess.com/pub/leaderboards')
        .then(responses => {
            return responses.json();
        })
        .then(data => {
            document.getElementById('imagenCargar').style.display = '';
            let jugadores = data.daily;

            console.log(jugadores[0]);
            console.log(jugadores[1]);
            console.log(jugadores[2]);

            tablonGlobalControlador(jugadores, 3);

        });

}