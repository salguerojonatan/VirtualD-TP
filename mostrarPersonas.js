const rp = require('request-promise');

rp('https://reclutamiento-14cf7.firebaseio.com/personas.json').then((res) => {
    console.log(JSON.parse(res));
});