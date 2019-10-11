const request = require('request')

const forecast = (latutide, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/594dcd0e596767fc44ea779af941c563/'+
        latutide+
        ','+
        longitude+
        '?units=si'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        // else if(body.features.length == 0){
        //     callback('Unable to find location', undefined)
        // }
        else{
            callback(undefined, {
                summary: body.currently.summary
            })
        }
    })
}

module.exports = forecast