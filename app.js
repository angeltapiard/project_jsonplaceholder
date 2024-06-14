const apiURL = 'https://jsonplaceholder.typicode.com/users';

const usuariosContainer = document.querySelector('.usuarios');

fetch(apiURL)
    .then(response => response.json())
    .then(users => {
        
        users.slice(0, 10).forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            userDiv.innerHTML = `
                <h4><span>Name:</span> ${user.name}</h4>
                <h4><span>Email:</span> ${user.email}</h4>
                <h4><span>Address:</span> ${user.address.street}, ${user.address.city}</h4>
                <h4><span>Number phone:</span> ${user.phone}</h4>
                <h4><span>Website:</span> ${user.website}</h4>
                <div class="botones">
                    <a href="vistas/albums.html?userId=${user.id}">ALBUMS</a>
                    <a href="vistas/posts.html?userId=${user.id}">POST</a>
                    <a href="vistas/todos.html?userId=${user.id}">TODOS</a>
                </div>
            `;

            usuariosContainer.appendChild(userDiv);
        });
    });


   