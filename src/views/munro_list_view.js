const PubSub = require('../helpers/pub_sub.js');
const MunroDetails = require('./munro_details.js')


const MunroListView = function (htmlElement){
  this.htmlElement = htmlElement;
}

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munro-data-loaded', (event) => {
    const munroList = event.detail;
    munroList.forEach((munro) => {
      const munroDetails = new MunroDetails(munro, this.htmlElement);
      munroDetails.renderMunro();
    });
  });
};



module.exports = MunroListView;




// Using a find method:
// const myMunro = munroData.find((munro) => {
//   return munro.name === "Carn Eighe"
// })
//
// console.log(myMunro);
