// Karma configuration
// Generated on Tue May 17 2016 08:21:25 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/html2json/lib/**/*.js',
      'node_modules/html2json/src/*.js',
      'vendor/angular/angular.js',
      'vendor/angular-mocks/angular-mocks.js',
      'app/weather.module.js',
      'app/tmpl/**/*.html',
      'app/**/*.js',
      'test/**/helpers/*.js',
      'test/**/unit/*.spec.js'
  ],


    // list of files to exclude
    exclude: [
    ],

    // karma.conf.js

    preprocessors: {
        "app/tmpl/**/*.html": ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
        // If your build process changes the path to your templates,
        // use stripPrefix and prependPrefix to adjust it.
        //stripPrefix: "app/tmpl",
        //prependPrefix: "app",

        // the name of the Angular module to create
        moduleName: "weather.templates"
    },

    reporters: ['jasmine-diff','progress'],

      jasmineDiffReporter: {
          matchers: {
            equalsHtml: {
              pattern: /Expected HTML is ([\S\s]*?) not equal to ([\S\s]*?)\./, //must match the result message of the matcher
              reverse: true
            }
          }
      },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
});
};
