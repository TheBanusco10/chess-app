window.onload = () => {

    getTopJugadores();

    document.getElementById('buscarPerfilJugador').addEventListener('click', () => {
        buscarJugador();
    });

}

function tablonGlobalControlador(jugadores, max) {

    tablonGlobalVista(jugadores, max);

}

function perfilJugadorControlador(jugador) {

    document.getElementById('resultadoPerfilJugador').innerHTML = perfilJugadorVista(jugador);

}

