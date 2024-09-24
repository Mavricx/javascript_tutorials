const weather = document.querySelector('.weather');
const wind = document.querySelector('.wind')
function fetchandshow() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9db901f443e1a88a2f743bb123aa39da`;
    let apiUrl = fetch(url);
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
            weather.innerHTML = `<h1>Temperature: ${data.main.temp} F</h1>`;
            wind.innerHTML = `<h2> Weather condition: ${data.weather[0].main}</h2>`
        }).catch(err => {
            weather.innerHTML = `<h1>Error fetching the post : ${err.message}</h1>`;
        }) 
}

let button = document.querySelector("button");

button.addEventListener("click", fetchandshow);