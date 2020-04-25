const axios = require ('axios');
axios.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
  .then(function (response) {
    console.log('The response is: ')
    console.log(response);
  })
  .catch(function (error) {
    console.log('The error is: ')
    console.log(error);
  })
  .finally(function () {
  });