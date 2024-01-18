let btn = document.querySelector("#btn")
let weather = document.querySelector(".Weather")
let city = document.querySelector(".city")

function updateList(data) {
    weather.innerHTML = '';
    let li = document.createElement('ul');
    li.classList.add('WeatherItem');

    li.innerHTML = `
            <p class="para">Name:- ${data.name}</p>
            <p class="para">Cod:- ${data.cod}</p>
            <p class="para">Coord Lon:- ${data.coord.lon}</p>
            <p class="para">Coord Lat:- ${data.coord.lat}</p>
            <p class="para">Base:- ${data.base}</p>
            <p class="para">Main_temp:- ${data.main.temp}</p>
            <p class="para">Main_feels_like:- ${data.main.feels_like}</p>
            <p class="para">Main_temp_min:- ${data.main.temp_min}</p>
            <p class="para">Main_temp_max:- ${data.main.temp_max}</p>
            <p class="para">Main_pressure:- ${data.main.pressure}</p>
            <p class="para">Main_humidity:- ${data.main.humidity}</p>
            <p class="para">Visibility:- ${data.visibility}</p>
            <p class="para">Wind_speed:- ${data.wind.speed}</p>
            <p class="para">Wind_deg:- ${data.wind.deg}</p>
            <p class="para">Clouds_all:- ${data.clouds.all}</p>
            <p class="para">Dt:- ${data.dt}</p>
            <p class="para">Sys_type:- ${data.sys.type}</p>
            <p class="para">Sys_id:- ${data.sys.id}</p>
            <p class="para">Sys_country:- ${data.sys.country}</p>
            <p class="para">Sys_sunrise:- ${data.sys.sunrise}</p>
            <p class="para">Sys_sunset:- ${data.sys.sunset}</p>
            <p class="para">Timezone:- ${data.timezone}</p>
        `
    weather.appendChild(li);

}

btn.addEventListener('click', (ev) => {
    console.log("EV", ev, city.value);
    axios.get(`/getWeather?city=${city.value}`)
        .then((data) => {
            console.log("BUTTON CLICKED");
            data = data.data;
            console.log("DATA IN SCRIPT", data)
            updateList(data);
            // updateList(JSON.stringify(data));
        })
        .catch(err => {
            alert(err);
        })
})

city.addEventListener('keypress', (ev) => {
    if (ev.key === "Enter") {
        console.log("EV", ev, city.value);
        axios.get(`/getWeather?city=${city.value}`)
            .then((data) => {
                console.log("BUTTON CLICKED");
                data = data.data;
                console.log("DATA IN SCRIPT", data)
                updateList(data);
                // updateList(JSON.stringify(data));
            })
            .catch(err => {
                alert(err);
            })
    }
})