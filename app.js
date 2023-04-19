const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=a2756d34e68ea384c4f0cee5ee5954ad&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current);
})
