const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=a2756d34e68ea384c4f0cee5ee5954ad&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('unable to connect to weather service');

    } else if (response.body.error) {
        console.log('Unable to find location');
    }


    else {
        console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. But it feels like it's ${response.body.current.feelslike} out.`);

    }



})

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12whattt.json?access_token=pk.eyJ1IjoiaGFzaGltd2FycmVuIiwiYSI6ImNsZ28xdGFhczBkaWkzZXA5NmpiOWlsejkifQ.e4wied9ehZqtITptvFed5w&limit=1'

request({ url: url2, json: true }, (error, response) => {

    if (error) {
        console.log('unable to connect to location services');

    } else if (!response.body.features.length) {
        console.log('No city found');

    }


    else {
        console.log(response.body.features[0].center[1]);

    }


}) 