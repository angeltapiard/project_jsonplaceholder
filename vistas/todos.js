const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const todosContainer = document.querySelector('.todos');

fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(response => response.json())
    .then(todos => {
        todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo');

            todoDiv.innerHTML = `
                <h4>${todo.title}</h4>
                <p class="color">Completed: ${todo.completed}</p>
            `;

            todosContainer.appendChild(todoDiv);
        });
    });