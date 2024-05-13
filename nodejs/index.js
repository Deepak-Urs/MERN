console.log('Hello World!');
//console.log(global);

//const {generateRandomNumber, celsiusToFahrenheit} = require('./utils');
//console.log('Random Number: ', generateRandomNumber());

//console.log('CtoF Number: ', celsiusToFahrenheit(20));

import getPosts, { getPostsLength } from "./postController.js";
console.log(getPosts())
console.log('Posts Length:', getPostsLength)