const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

geocode.geocode('mumbai',(error,data) => {
    if(error){
        console.log("Error ",error);
    } else {
        console.log(data);
    }
})

