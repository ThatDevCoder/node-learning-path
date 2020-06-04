const request = require('request');

forecast = (latitude,longitude,callback) => {
    const address = `http://api.weatherstack.com/current?access_key=<YOUR_API_HERE>&query=${latitude},${longitude}`

    request({url:address,json:true},(error,response) => {
        if(error) { 
            console.log("Check your internet");
        } else if(response.body.error){
            console.log("Something wrong with coords");
            
        }
    })
}


module.exports = {
    forecast:forecast
}