const fetch = require("node-fetch");

class Streamer {
    static async getContent(options = {}) {
        let city = options.city || "Tampa";
        let country = options.country ? `%2C${options["country"]}` : "";

        const URL = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}${country}&lat=0&lon=0&lang=null&units=metric`;

        const response = await fetch(URL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5c79875105mshff840a030e58200p162034jsnfb92758ecb5c",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        });
        const json = await response.json();
        const data = JSON.stringify(json);
        const parsed_result = JSON.parse(data);
        return  `<div>${parsed_result.name}</div>`;
    }
}

module.exports = Streamer;