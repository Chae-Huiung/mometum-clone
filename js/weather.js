const API_KEY = "756766049a2af26b6ef9a480568c7b6b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            weather.innerText = data.weather[0].main;
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("cant find you, no weahter for you.");
}

//cross line 

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

