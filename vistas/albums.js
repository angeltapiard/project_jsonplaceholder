const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const albumsContainer = document.querySelector('.albums');
const photosContainer = document.querySelector('.photos');
const photosModal = new bootstrap.Modal(document.getElementById('photosModal'));

fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    .then(response => response.json())
    .then(albums => {
        albums.forEach(album => {
            const albumTitle = document.createElement('div');
            albumTitle.classList.add('album-title', 'card', 'mb-3', 'p-3');
            albumTitle.dataset.albumId = album.id;

            albumTitle.innerHTML = `
                <h4 "class="badge text-bg-dark"">${album.title}</h4>
            `;
            albumTitle.addEventListener('click', function() {
                const albumId = this.dataset.albumId;
                fetchAlbumPhotos(albumId);
            });

            albumsContainer.appendChild(albumTitle);
        });
    })

function fetchAlbumPhotos(albumId) {
    photosContainer.innerHTML = ''; 
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => response.json())
        .then(photos => {
            photos.forEach((photo, index) => {
                const photoDiv = document.createElement('div');
                photoDiv.classList.add('photo-item', 'col-lg-2', 'col-md-3', 'col-sm-4', 'col-6');

                photoDiv.innerHTML = `
                    <img src="${photo.thumbnailUrl}" alt="${photo.title}" data-bs-toggle="tooltip" title="${photo.title}">
                `;

                photosContainer.appendChild(photoDiv);
            });

            photosModal.show();
        })
}