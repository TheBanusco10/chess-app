function getApp() {

    return document.getElementById('app');

}

function getTopJugadores() {

    fetch('https://api.chess.com/pub/leaderboards')
        .then(responses => {
            return responses.json();
        })
        .then(data => {
            mostrarCarga();
            let jugadores = data.daily;

            tablonGlobalControlador(jugadores, 3);

            ocultarCarga();

        });

}

function buscarJugador() {

    let jugador = document.getElementById('buscarJugadorInput').value;

    fetch(`https://api.chess.com/pub/player/${jugador} `)
        .then (response => {
            return response.json();
        })
        .then (data => {
            console.log(data);
            perfilJugadorControlador();
        });

}

function mostrarCarga() {

    document.getElementById('imagenCargar').style.display = '';


}

function ocultarCarga() {

    document.getElementById('imagenCargar').style.display = 'none';

}