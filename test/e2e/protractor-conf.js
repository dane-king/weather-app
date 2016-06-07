exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  //relative to protractor.config.js
  specs: ['**/*.spec.js']
};
