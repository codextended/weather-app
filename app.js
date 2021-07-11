// const request = require('request');
import request from 'request';

import { geocode } from './utils/geocode.js';
import { weather } from './utils/weather.js';

const city = process.argv[2];

if (!city) {
    console.log("Please provide a valid city");
} else {
    weather(city, (error, {currentTemp}) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`It is currently ${currentTemp} degrees out in ${city}.`);
        } 
    });
}


// geocode('Port au Prince', (error, data) =>{
//     console.log(error);
//     console.log(data);
// });

