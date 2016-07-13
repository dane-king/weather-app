describe("Directive", function () {

    var compileFn, $rootScope, template;

    beforeEach(module('weather.app'));
    beforeEach(module('weather.templates'));



    beforeEach(inject(function($compile, _$rootScope_, $templateCache){
     $rootScope=_$rootScope_;

     //prime template cache to prevent unexpected GET
     template = $templateCache.get('app/tmpl/enter.zip.html');
     $templateCache.put('tmpl/enter.zip.html',template);

      compileFn=function getCompileFunction(html,scope){
        if(!scope) scope=$rootScope;
        var compiledElement=$compile(html)(scope);
        scope.$digest();
        return compiledElement;
      };
    }));

    describe("Entering Zip", function () {
      var compiledElement,
      expected_zip_html='<div class="enter_zip clear">'+
      '<label for="zip"></label>'+
      '<input type="text" id="zip" ng-model="weatherCtrl.zip" placeholder="Enter Zip Code" class="ng-pristine ng-untouched ng-valid ng-empty">'+
      '<button ng-click="weatherCtrl.getWeather()" type="button" name="getWeather" id="getWeather">Get Weather</button>'+
      '</div>';

      beforeEach(function () {
        var scope=$rootScope.$new();
        compiledElement=compileFn('<enter-zip>This is overwritten</enter-zip>',scope);
      });
      it("should expand create the html for the directive", function () {
        expect(compiledElement.html()).equalsHtml(expected_zip_html);
      });

      it("should have the correct click event", function () {
        expect(compiledElement.html()).toHaveClickEvent('weatherCtrl.getWeather()');
      });

      it("should be able to convert to json and compare", function () {
           var removeLineFeeds=/(\r\n|\n|\r)/g,
          actual_html=html2json(trimHtml(compiledElement.html())),
          expect_html=html2json(expected_zip_html);
          expect(actual_html).toEqual(expect_html);
      });

    });

    function trimHtml(html){
        if(typeof html!=="string") throw Error('Can only trim html strings');
        var removeLineFeeds=/(\r\n|\n|\r)/g,
        removeWhiteSpaceBetweenTags=/\>([\s]+)\</g;
        return html.replace(removeWhiteSpaceBetweenTags,"><").replace(removeLineFeeds,"");
    }
});
