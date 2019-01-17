const Munros = require('./models/munros.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  // initiate munro_list_view, bindEvents


  const munros = new Munros();
  munros.getData();
  // initiate munro object, bindEvents
});
