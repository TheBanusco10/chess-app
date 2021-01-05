function tablonGlobalVista(jugadores, max) {

    let top = document.getElementById('topGlobal');
    let cards = [];

    for (let index = 0; index < max; index++) {
        const element = jugadores[index];

        let card = document.createElement('card');
        card.setAttribute('class', 'card');

        let img = document.createElement('img');
        img.setAttribute('src', element.avatar);

        let rank = document.createElement('p');
        rank.setAttribute('class', 'rank');
        let textRank = document.createTextNode(element.rank);
        rank.appendChild(textRank);

        let name = document.createElement('p');
        name.setAttribute('class', 'name');
        let a = document.createElement('a');
        a.setAttribute('href', element.url);
        a.setAttribute('target', '_blank');
        let textA = document.createTextNode(element.name);
        a.appendChild(textA);
        name.appendChild(a);

        let score = document.createElement('p');
        score.setAttribute('class', 'score');
        let textScore = document.createTextNode(element.score);
        score.appendChild(textScore);

        let tags = [img, rank, name, score];

        card.append(...tags);

        cards.push(card);
        
    }

    top.append(...cards);

}


// TODO Completar vista perfil jugador
function perfilJugadorVista() {

    return 'Prueba de perfil';

}