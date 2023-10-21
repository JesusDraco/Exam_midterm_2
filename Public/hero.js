let currentHeroId = 1;

function getHero(id) {
    axios.get(`http://localhost:3000/hero/${id}`)
        .then(response => {
            displayHero(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

function searchHero() {
    const name = document.getElementById('searchInput').value;
    axios.get(`http://localhost:3000/search/${name}`)
        .then(response => {
            if (response.data.length > 0) {
                displayHero(response.data[0]);
                currentHeroId = response.data[0].id;
            } else {
                alert('Superhéroe no encontrado');
            }
        })
        .catch(error => {
            console.error(error);
        });
}

function getPowerStats(id) {
    axios.get(`http://localhost:3000/powerstats/${id}`)
        .then(response => {
            displayPowerStats(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayPowerStats(powerstats) {
    const powerStatsDiv = document.getElementById('powerStats');
    powerStatsDiv.innerHTML = `
        <h3>Estadísticas de poder:</h3>
        <p><strong>Inteligencia:</strong> ${powerstats.intelligence}</p>
        <p><strong>Fuerza:</strong> ${powerstats.strength}</p>
        <p><strong>Velocidad:</strong> ${powerstats.speed}</p>
        <p><strong>Durabilidad:</strong> ${powerstats.durability}</p>
        <p><strong>Poder:</strong> ${powerstats.power}</p>
        <p><strong>Combate:</strong> ${powerstats.combat}</p>
    `;
}

function getAppearance(id) {
    axios.get(`http://localhost:3000/appearance/${id}`)
        .then(response => {
            displayAppearance(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayAppearance(appearance) {
    const appearanceDiv = document.getElementById('appearance');
    appearanceDiv.innerHTML = `
        <h3>Apariencia:</h3>
        <p><strong>Género:</strong> ${appearance.gender}</p>
        <p><strong>Raza:</strong> ${appearance.race}</p>
        <p><strong>Altura:</strong> ${appearance.height.join(', ')}</p>
        <p><strong>Peso:</strong> ${appearance.weight.join(', ')}</p>
        <p><strong>Color de ojos:</strong> ${appearance.eyeColor}</p>
        <p><strong>Color de pelo:</strong> ${appearance.hairColor}</p>
    `;
}

function getBiography(id) {
    axios.get(`http://localhost:3000/biography/${id}`)
        .then(response => {
            displayBiography(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayBiography(biography) {
    const biographyDiv = document.getElementById('biography');
    biographyDiv.innerHTML = `
        <h3>Biografía:</h3>
        <p><strong>Nombre completo:</strong> ${biography.fullName}</p>
        <p><strong>Alter egos:</strong> ${biography.alterEgos}</p>
        <p><strong>Alias:</strong> ${biography.aliases.join(', ')}</p>
        <p><strong>Lugar de nacimiento:</strong> ${biography.placeOfBirth}</p>
        <p><strong>Primera aparición:</strong> ${biography.firstAppearance}</p>
        <p><strong>Alineación:</strong> ${biography.alignment}</p>
    `;
}

function getConnections(id) {
    axios.get(`http://localhost:3000/connections/${id}`)
        .then(response => {
            displayConnections(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayConnections(connections) {
    const connectionsDiv = document.getElementById('connections');
    connectionsDiv.innerHTML = `
        <h3>Conexiones:</h3>
        <p><strong>Grupo de afiliación:</strong> ${connections.groupAffiliation}</p>
        <p><strong>Relativos:</strong> ${connections.relatives}</p>
    `;
}

function getWork(id) {
    axios.get(`http://localhost:3000/work/${id}`)
        .then(response => {
            displayWork(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayWork(work) {
    const workDiv = document.getElementById('work');
    workDiv.innerHTML = `
        <h3>Trabajo:</h3>
        <p><strong>Ocupación:</strong> ${work.occupation}</p>
        <p><strong>Base:</strong> ${work.base}</p>
    `;
}


function displayHero(hero) {
    const heroInfoDiv = document.getElementById('heroInfo');
    heroInfoDiv.innerHTML = `
        <h2>${hero.name}</h2>
        <img src="${hero.images.lg}" alt="${hero.name}">
        <!-- Añade aquí más información sobre el superhéroe -->
    `;
    getPowerStats(hero.id);
    getAppearance(hero.id);
    getBiography(hero.id);
    getConnections(hero.id);
    getWork(hero.id);
}

function nextHero() {
    currentHeroId++;
    getHero(currentHeroId);
}

function previousHero() {
    currentHeroId--;
    if (currentHeroId < 1) {
        currentHeroId = 731; // El número total de superhéroes en la API
    }
    getHero(currentHeroId);
}

// Obtén el primer superhéroe al cargar la página
getHero(currentHeroId);
