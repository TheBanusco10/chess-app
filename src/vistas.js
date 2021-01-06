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


function perfilJugadorVista(jugador) {

    let avatar = jugador.avatar ? jugador.avatar : 'images/no-avatar.png'
    
    return `
    
    <div class="card">
        <img src="${avatar}" alt="${jugador.username}">
        <p class="name"><a href="${jugador.url}" target="_blank">${jugador.username}</a></p>
        <p class="rank">${jugador.status}</p>
    </div>

    
    `;



}