const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const postsContainer = document.querySelector('.posts');

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `
                <h4 class="card-title" data-postid="${post.id}" style="cursor: pointer;">${post.title}</h4>
                <p class="card-text">${post.body}</p>
                <ul class="comments-list" style="display: none;"></ul> <!-- Container for comments -->
            `;
            postsContainer.appendChild(postDiv);

            const postTitle = postDiv.querySelector('.card-title');
            postTitle.addEventListener('click', () => {
                const postId = postTitle.dataset.postid;
                const commentsList = postDiv.querySelector('.comments-list');
                const commentsListDisplayStyle = commentsList.style.display;

                if (commentsListDisplayStyle === 'none') {
                    commentsList.style.display = 'block';

                    if (commentsList.children.length === 0) {
                        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                            .then(response => response.json())
                            .then(comments => {
                                comments.forEach(comment => {
                                    const commentItem = document.createElement('li');
                                    commentItem.innerHTML = `<strong>${comment.email}:</strong> ${comment.body}`;
                                    commentsList.appendChild(commentItem);
                                });
                            });
                    }
                } else {
                    commentsList.style.display = 'none';
                }
            });
        });
    });