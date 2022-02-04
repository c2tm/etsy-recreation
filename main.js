$( document ).ready(function() {

const BASE_URL = 'https://openapi.etsy.com/v2/public/listings/active.js';
let searchTerm = 'galaxy';
let limit = '16';

   $.ajax({
      url: `${BASE_URL}?api_key=${API_KEY}&limit=${limit}&includes=Images:1&keywords=${searchTerm}`,
      dataType: 'jsonp',
      method: 'GET',

      success: function(data) {
           // this is where you run const source, const template, etc.
           console.log(data);
           const source = document.getElementById(`etsy-image-template`).innerHTML; 
           const template = Handlebars.compile(source);
           const context = data;
           const html = template(context);
           document.querySelector('.images-container').innerHTML = html;
      
       },


       error: function (xhr) {
          console.log('Uh oh! Something went wrong.', xhr.status);
       }

   });


});