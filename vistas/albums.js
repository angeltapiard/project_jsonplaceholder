const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const albumsContainer = document.querySelector('.albums');

fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    .then(response => response.json())
    .then(albums => {
        let albumCards = '';
        albums.map((album, index) => {
            albumCards += `
                <div class="col mb-4">
                    <div class="card h-100 album-card" data-bs-toggle="modal" data-bs-target="#photosModal" data-album-id="${album.id}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${album.title}</h5>
                        </div>
                    </div>
                </div>
            `;
        });

        albumsContainer.innerHTML = albumCards;

        document.querySelectorAll('.album-card[data-album-id]').forEach(card => {
            card.addEventListener('click', function() {
                const albumId = this.dataset.albumId;
                fetchAlbumPhotos(albumId);
            });
        });
    });

function fetchAlbumPhotos(albumId) {
    const photosContainer = document.querySelector('.photos');
    photosContainer.innerHTML = '';

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => response.json())
        .then(photos => {
            let photoItems = '';
            photos.forEach((photo, index) => {
                photoItems += `
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                        </div>
                    </div>
                `;
            });

            photosContainer.innerHTML = photoItems;
            $('#photosModal').modal('show');
        });
}
