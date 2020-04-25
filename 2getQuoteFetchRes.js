const fetch = require('node-fetch');

const fetchRequest = (url, options) => {
  return fetch(url, options)
    .then(res => res.json())
    .then(json => {
      console.log('The response is: ')
      console.log(json)
    })
    .catch(error => {
      console.log('The error is: ')
      console.log(error);
    })
};
fetchRequest('http://quotes.stormconsultancy.co.uk/random.json'); //random technical quote
