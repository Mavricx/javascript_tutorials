const weather = document.querySelector('.weather');
const wind = document.querySelector('.wind');
function fetchandshow() {
    let apiUrl = fetch("https://goweather.herokuapp.com/weather/newDelhi");
    apiUrl.then(response => {
        console.log(response.ok);
        console.log(response.status);
        console.log(response.headers)
        return response.json();
    })
        .then(data => {
            console.log(data);
            weather.classList.add('box');
            wind.classList.add('box');
            weather.innerHTML = `<h1>Temperature: ${data.temperature}</h1>`;
            wind.innerHTML = `<h2> Wind Speed: ${data.wind}</h2>`
        }).catch(err => {
            weather.innerHTML = `<h1>Error fetching the post : ${err.message}</h1>`;
        })
}

let button = document.querySelector("button");

button.addEventListener("click", fetchandshow);