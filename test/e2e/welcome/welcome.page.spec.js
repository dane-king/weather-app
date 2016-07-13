var WelcomePage = require('./welcome.page.js');


describe('Weather Station home page', function() {
  var page,image_url_regex;
  describe("Welcome Page", function() {
    beforeEach(function() {
      page = new WelcomePage();
      page.get();
    });


    describe("Entering Zip", function () {
      beforeEach(function () {
        page.enterZip('43068');
        page.clickButton();
        image_url_regex=new RegExp(/^https?:\/\/openweathermap\.org\/img\/w\/\d\d[a-z].png$/);
      });

      it("should show weather in Reynoldsburg", function() {
        expect(page.temperature.getText()).not.toEqual('0');
        expect(page.icon.getAttribute('src')).toMatch(image_url_regex);
        expect(page.location.getText()).toEqual('Reynoldsburg, OH');
      });

    });
  });
});
