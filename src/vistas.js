function tablonGlobalVista(jugadores, max) {

    let contenido  = `

        <div class="container">
        <div class="row">
            <h1 class="text-center">Tablón global de estadísticas</h1>
            <div id="imagenCargar">
                <img src="images/loading.gif" alt="loading">        
            </div>
            <section id="topGlobal">
                
    
    `;

    for (let index = 0; index < max; index++) {
        const element = jugadores[index];

        contenido += `

            <div class="card">
                <img src="${element.avatar}" alt="${element.title}">
                <p class="rank">${element.rank}</p>
                <p class="name"><a href="${element.url}" target="_blank">${element.name}</a></p>
                <p class="score">${element.score} puntos</p>
            </div>
        
        `;
        
    }

    contenido += `
                </section>
            </div>
        </div>    
    
    `;

    return contenido;

}