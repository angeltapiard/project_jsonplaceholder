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
                    <button type="button" class="btn btn-primary">Albums</button>
                    <button type="button" class="btn btn-secondary">Posts</button>
                    <button type="button" class="btn btn-success">ToDos</button>
                </div>
            `;

            usuariosContainer.appendChild(userDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });