var Welcome = function() {
  var welcomeMsg = element(by.tagName('h2'));
  var zipEnter = element(by.id('zip'));
  var submitButton = element(by.id('getWeather'));


  this.temperature = element(by.id('temp'));
  this.location = element(by.id('location'));
  this.icon = element(by.id('icon'));

  this.get = function() {
    browser.get('http://localhost:8000');
  };

  this.getWelcomeMsg = function() {
    return welcomeMsg.getText();
  };
  this.enterZip = function(zipCode) {
    zipEnter.clear().then(function(){
      zipEnter.sendKeys(zipCode);
    });
  };

  this.clickButton = function() {
    submitButton.click();
  };

};

module.exports = Welcome;
