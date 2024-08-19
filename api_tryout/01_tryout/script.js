const apiUrl="https://jsonplaceholder.typicode.com/posts"


function fetchAndShow(){

    fetch(apiUrl)
    .then(response=>{
        if(!response.ok){
            throw new Error(`Fetching ${apiUrl} failed with status code: ${response.statusCode}`);
        }
        return response.json();
    })
    .then(data=>{
        console.log(`Data fetched from ${apiUrl}`);
        const posts=document.querySelector('.post');

        data.forEach(post =>{
            const onePost=document.createElement('div');
            onePost.style.border = '2px solid pink';
            onePost.style.margin = '10px'
            onePost.textContent=post.title;
            posts.appendChild(onePost);
        })
    })
    .catch(err=>{
        console.log(`Error fetching the post : ${err.message}`);
    })
}

fetchAndShow();