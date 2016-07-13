(function(jasmine) {
    'use strict';
    beforeEach(function () {
        jasmine.addMatchers(directiveMatcher);
    });
    var directiveMatcher={
          toHaveClickEvent:function(util,customEqualityTesters){
              return {
                  compare:function(actual,expected){
                      if (expected === undefined) {
                        expected = '';
                      }
                      var click_value=actual.match(/ng-click="(.[^"]+)"/)[1];
                      var result = {};
                      result.pass = util.equals(click_value, expected, customEqualityTesters);
                      result.message="Expected ng-click of '" + expected + "'";
                      if(!result.pass) result.message+=" but found '" + click_value +"''";
                      return result;
                  }
              };
          },
          equalsHtml:function(util, customEqualityTesters) {
                  function trimHtml(html){
                      var removeLineFeeds=/(\r\n|\n|\r)/g,
                      removeWhiteSpaceBetweenTags=/\>([\s]+)\</g;
                      return html.replace(removeWhiteSpaceBetweenTags,"><").replace(removeLineFeeds,"");
                  }
                return {
                  compare: function (actual, expected) {
                    if (expected === undefined) {
                      expected = '';
                    }
                    actual=trimHtml(actual);
                    expected=trimHtml(expected);

                    var result = {};
                    result.pass = util.equals(actual, expected, customEqualityTesters);

                    result.message = 'Expected HTML is ' + actual;
                    if (!result.pass) {
                      result.message += ' not';
                    }
                    result.message += ' equal to ' + expected + '.';
                    return result;
                  }
                };
            }
    };

}(jasmine));
