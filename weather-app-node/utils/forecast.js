const request = require('request');

forecast = (latitude,longitude,callback) => {
    const address = `http://api.weatherstack.com/current?access_key=<YOUR_API_KEY>&query=${latitude},${longitude}`

    request({url:address,json:true},(error,response) => {
        if(error) { 
            callback('Unable to connect to internet')
        } else if(response.body.error){
            callback('You have entered a wrong place')
        } else {
            callback(undefined,{
                location: response.body.location.name,
                temperature : response.body.current.temperature,
                feelslike : response.body.current.feelslike
            })
        }
    })
}


module.exports = {
    forecast:forecast
}