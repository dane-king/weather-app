var WelcomePage = require('./welcome.page.js');


describe('Weather Station home page', function() {
  describe("Welcome Page", function() {
    beforeEach(function() {
      page = new WelcomePage();
      page.get();
    });

    it('should add be able to get weather', function() {
      expect(page.getWelcomeMsg()).toEqual('Welcome');
    });

    it("should reset temperature on page load", function () {
      expect(page.temperature.getText()).toEqual('0');
    });
    describe("Entering Zip", function () {
      beforeEach(function () {
        page.enterZip('43068');
        page.clickButton();
      });
      it("should change temperature", function() {
        expect(page.temperature.getText()).not.toEqual('0');
      });
      it("should show location", function() {
        expect(page.location.getText()).toEqual('Reynoldsburg');
      });

    });
  });
});
