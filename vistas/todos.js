const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const todosContainer = document.querySelector('.todos');

fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(response => response.json())
    .then(todos => {
        todos.sort((a,b) => a.title.localeCompare(b.title))

        todos.map(todo => {
            const todoElement = document.createElement('div');
            todoElement.classList.add('col', 'mb-4');

            if (todo.completed) {
                todoElement.innerHTML = `
                    <div class="alert alert-success" role="alert">
                        ${todo.title}
                    </div>
                `;
            } else {
                todoElement.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        ${todo.title}
                    </div>
                `;
            }

            todosContainer.appendChild(todoElement);
        });
    });
