const Munros = require('./models/munros.js');
const MunroListView = require('./views/munro_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  // initiate munro_list_view, bindEvents

  const munroListSection = document.querySelector('#munro-details');
  const munroListViewArea = new MunroListView(munroListSection);
  munroListViewArea.bindEvents();

  const munros = new Munros();
  munros.getData();
  // initiate munro object, bindEvents
});
