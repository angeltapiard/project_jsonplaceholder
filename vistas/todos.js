const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const todosContainer = document.querySelector('.todos');

fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(response => response.json())
    .then(todos => {
        todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo', 'card','mb-3', 'p-3', todo.completed ? 'true' : 'false');

            todoDiv.innerHTML = `
                <h5 class="color"><hr>Title: ${todo.title} <hr>Completed: ${todo.completed}<hr></h6>
            `;

            todosContainer.appendChild(todoDiv);
        });
    });