const fetch = require('node-fetch');

const fetchRequest = (url, options) => {
  return fetch(url, options)
    .then(res => (res.status < 400 ? res : Promise.reject(res)))
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
fetchRequest('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'); //gets error