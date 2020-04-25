const axios = require ('axios');
// axios.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1') // gets error
axios.get('http://quotes.stormconsultancy.co.uk/random.json') //random technical quote
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });