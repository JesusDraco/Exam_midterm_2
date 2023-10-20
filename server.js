let currentHeroIndex = 0;

fetch('https://akabab.github.io/superhero-api/api/all.json')
    .then(response => response.json())
    .then(data => {
        updateHeroCard(data[currentHeroIndex]);

        document.getElementById('prevButton').addEventListener('click', () => {
            currentHeroIndex--;
            if (currentHeroIndex < 0) {
                currentHeroIndex = data.length - 1; // Si estamos en el primer superhéroe, vamos al último
            }
            updateHeroCard(data[currentHeroIndex]);
        });

        document.getElementById('nextButton').addEventListener('click', () => {
            currentHeroIndex++;
            if (currentHeroIndex >= data.length) {
                currentHeroIndex = 0; // Si estamos en el último superhéroe, volvemos al primero
            }
            updateHeroCard(data[currentHeroIndex]);
        });

        document.getElementById('searchButton').addEventListener('click', () => {
            const searchQuery = document.getElementById('searchInput').value;
            const foundHero = data.find(hero => hero.name.toLowerCase() === searchQuery.toLowerCase());

            if (foundHero) {
                updateHeroCard(foundHero);
            } else {
                alert('Superhero not found');
            }
        });
    });

function updateHeroCard(hero) {
    const heroContainer = document.getElementById('hero-container');
    heroContainer.innerHTML = `
    <h2>${hero.name}</h2>
    <img src="${hero.images.md}" alt="${hero.name}">
    <p>${hero.biography.fullName}</p>
    // Agrega aquí más detalles
  `;
}
