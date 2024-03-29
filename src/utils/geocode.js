const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + 
        address + 
        ".json?" +
        "access_token=pk.eyJ1Ijoic3RhdmZhcmFuIiwiYSI6ImNrMTdscDF0bjBtdXYzcG8yNzVnejV1ZWsifQ.4OiHGaK46hS3UjmlWGdN_A&limit=1"

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect tot location services!', undefined)
        }
        else if(body.features.length == 0){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode