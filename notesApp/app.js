const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const yargs = require('yargs');

// // let input = ""
// yargs.command({
//     command : 'place',
//     describe: 'Enter a place to get temp',
//     builder: {
//         placename: {
//             describe: 'placename pls',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler(argv){
//         input = argv.placename
//     }
// })

geocode.geocode('mumbai',(error,data) => {
    if(error){
        console.log("Error ",error);
    } else {
        // console.log(data);
        forecast.forecast(data.latitude,data.longitude,(error,data) => {
            if(error){
                console.log("Error ",error);
            } else {
                console.log("Location ",data.location);
                console.log("Temperature ",data.temperature);
                console.log("FellsLike ",data.feelslike);
            }
        })
    }
})
