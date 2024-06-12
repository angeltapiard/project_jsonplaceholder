const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const postsContainer = document.querySelector('.posts');

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const postDiv = document.createElement('div')
            postDiv.innerHTML = `
                <h4 class="card-title">${post.title}</h4>
                <p class="card-text">${post.body}</p>
            `;

            postsContainer.appendChild(postDiv);
        });
    })
    .catch(error => console.error('Error fetching posts:', error));