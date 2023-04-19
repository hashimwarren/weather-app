const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=a2756d34e68ea384c4f0cee5ee5954ad&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    //console.log(response.body.current);
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. But it feels like it's ${response.body.current.feelslike} out.`);
})
