const request = require('request');

const geocode = (add,callback) => {
    const address = `https://api.mapbox.com/geocoding/v5/mapbox.places/${add}.json?access_token=<YOUR_API_HERE>`
    request({url:address,json:true}, (error,response) => {
        if(error) {
            callback('Unable to connect to internet')
        } else if(response.body.features.length === 0) {
            callback('You have entered a wrong place')
        } else {
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                place_name : response.body.features[0].place_name,
            })
        }
    })
}

module.exports = {
    geocode:geocode
}