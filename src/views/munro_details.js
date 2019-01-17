const MunroDetails = function (munroDetails, htmlElement) {
  this.munroDetails = munroDetails;
  this.htmlElement = htmlElement;
};


MunroDetails.prototype.renderMunro = function (){

  const thisMunroSection = document.createElement('section');
  thisMunroSection.id = this.munroDetails.name;
  this.htmlElement.appendChild(thisMunroSection);

  this.makeHeader(this.munroDetails, thisMunroSection);
  this.makeHeight(this.munroDetails, thisMunroSection);
  this.makeMeaning(this.munroDetails, thisMunroSection);

}

MunroDetails.prototype.makeHeader = function(munroDetails, munroSection){
  const header = document.createElement('h1');
  header.textContent = munroDetails.name;
  munroSection.appendChild(header);
};

MunroDetails.prototype.makeHeight = function(munroDetails, munroSection){
  const height = document.createElement('h3');
  height.textContent = munroDetails.height;
  munroSection.appendChild(height);
};

MunroDetails.prototype.makeMeaning = function(munroDetails, munroSection){
  const meaning = document.createElement('p');
  meaning.textContent = munroDetails.meaning;
  munroSection.appendChild(meaning);
};


module.exports = MunroDetails;
