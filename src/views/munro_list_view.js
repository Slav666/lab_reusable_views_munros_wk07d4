const PubSub = require('../helpers/pub_sub.js');
// subscribe to munro data

// receive munro data (array of munro information objects)

// for each munro in the array: ask munro_details.js to create a view

const MunroListView = function (htmlElement){
  this.htmlElement = htmlElement;
}

MunroListView.prototype.bindEvents = function () {

};

module.exports = MunroListView;
