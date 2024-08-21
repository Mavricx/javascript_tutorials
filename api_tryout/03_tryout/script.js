const apiUrlUsers = 'https://jsonplaceholder.typicode.com/users';
const postList = document.getElementById('post-list');

// Function to fetch and display users
function fetchAndDisplayUsers() {
    fetch(apiUrlUsers)
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                listItem.dataset.userId = user.id;
                listItem.style.cursor = 'pointer';
                listItem.addEventListener('click', fetchAndDisplayPosts);
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
}

// Function to fetch and display posts for a specific user
function fetchAndDisplayPosts(event) {
    const userId = event.target.dataset.userId;
    const apiUrlPosts = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    fetch(apiUrlPosts)
        .then(response => response.json())
        .then(posts => {
            postList.innerHTML = ''; // Clear previous posts
            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = post.title;
                postList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}

// Fetch and display users on page load
document.querySelector("button").addEventListener('click', fetchAndDisplayUsers);

