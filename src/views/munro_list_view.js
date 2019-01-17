const PubSub = require('../helpers/pub_sub.js');

const MunroListView = function (htmlElement){
  this.htmlElement = htmlElement;
}

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munro-data-loaded', (event) => {
    console.log('great success!');
    console.log(event.detail);
  })
};

module.exports = MunroListView;
