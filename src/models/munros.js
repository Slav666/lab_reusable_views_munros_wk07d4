const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js')

const Munros = function () {
  this.data = null;
};

Munros.prototype.getData = function () {
  const url = `https://munroapi.herokuapp.com/munros`;
  const request = new RequestHelper(url);
  const myPromise = request.get();
  myPromise.then((data) => {
    this.data = data;
    PubSub.publish('Munros:munro-data-loaded', this.data);
  });
  myPromise.catch((err) => {
    console.error(err)
  });
};



module.exports = Munros;
