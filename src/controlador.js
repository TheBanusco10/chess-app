window.onload = () => {

    // TODO Imagen de carga
    document.getElementById('imagenCargar').style.display = '';
    getTopJugadores();

}

function tablonGlobalControlador(jugadores, max) {

    getApp().innerHTML = tablonGlobalVista(jugadores, max);

}

