const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const albumsContainer = document.querySelector('.albums');

fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    .then(response => response.json())
    .then(albums => {
        albums.forEach(album => {
            const albumDiv = document.createElement('div');
            albumDiv.classList.add('album');

            albumDiv.innerHTML = `
                <h4>${album.title}</h4>

            `;

            albumsContainer.appendChild(albumDiv);
        });
    });