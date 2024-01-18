const axios = require('axios')


class Weather {
    static getWeather(city) {

        return new Promise((resolve, reject) => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f07a6f22420f6d9d0b126b66a70f9b7`)
                .then(response => {
                    console.log("RESPONSE IN HELPER*******", response.data);
                    resolve(response.data); // Resolve with the data from the response
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    reject(error);
                });

        })

    }
}

module.exports = Weather