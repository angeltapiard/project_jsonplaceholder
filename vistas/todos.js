const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const todosContainer = document.querySelector('.todos');

fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(response => response.json())
    .then(todos => {
        todos.forEach(todo => {
            if(todo.completed){
                todosContainer.innerHTML += `
                <div class="alert alert-success" role="alert">
                ${todo.title}
                </div>`;
            }else{
                todosContainer.innerHTML += `
                <div class="alert alert-danger" role="alert">
                ${todo.title}
                </div>`;
            }
            //const todoDiv = document.createElement('div');
            //todoDiv.classList.add('todo', 'card','mb-3', 'p-3', todo.completed ? 'true' : 'false');

            //todoDiv.innerHTML = `
               // <h5 class="color"><hr>Title: ${todo.title} <hr>Completed: ${todo.completed}<hr></h6>
            //`;

            //</hr></hr>todosContainer.appendChild(todoDiv);
        });
    });