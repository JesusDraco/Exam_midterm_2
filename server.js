fetch('https://akabab.github.io/superhero-api/api/all.json')
    .then(response => response.json())
    .then(data => {
        const heroContainer = document.getElementById('hero-container');
        data.forEach(hero => {
            const heroElement = document.createElement('div');
            heroElement.innerHTML = `
        <h2>${hero.name}</h2>
        <img src="${hero.images.md}" alt="${hero.name}">
        <p>${hero.biography.fullName}</p>
      `;
            heroContainer.appendChild(heroElement);
        });
    });
