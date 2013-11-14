module.exports = {
  name: 'site loader',

  'should be able to block the ui': function(test) {
    test.open('http://localhost:3000/home')
    .wait(500)
    .click('[data-ut="site-loader"]')
      .assert.visible('.site-loader', 'laoder is visible')
      .assert.visible('.site-loader .text', 'loader text is visible')
      .assert.text('.site-loader .text', 'Loading Application', 'text is correct')
      //css properties which verify that it is blocking the screen
      .assert.css('.site-loader', 'position', 'fixed', 'element is posistioned fixed')
      .assert.css('.site-loader', 'top', '0px', 'top is 0')
      .assert.css('.site-loader', 'left', '0px', 'left is 0')
      .assert.css('.site-loader', 'right', '0px', 'right is 0')
      .assert.css('.site-loader', 'bottom', '0px', 'bottom is 0')
    .done();
  },

  'should be able to block the ui with a custom message': function(test) {
    test.open('http://localhost:3000/home')
    .wait(500)
    .click('[data-ut="site-loader-custom"]')
      .assert.visible('[data-ut="text-custom"]', 'loader text is visible')
      .assert.text('[data-ut="text-custom"]', 'This is a custom message', 'text is correct')
      //css properties which verify that it is blocking the screen
      .assert.css('.site-loader', 'position', 'fixed', 'element is posistioned fixed')
      .assert.css('.site-loader', 'top', '0px', 'top is 0')
      .assert.css('.site-loader', 'left', '0px', 'left is 0')
      .assert.css('.site-loader', 'right', '0px', 'right is 0')
      .assert.css('.site-loader', 'bottom', '0px', 'bottom is 0')
    .done();
  },

  'should be able to display a non-block ui loader': function(test) {
    test.open('http://localhost:3000/home')
    .wait(500)
    .click('[data-ut="enable-non-blocking-site-loader"]')
      .assert.visible('.notify.non-blocking-loader', 'loader is visible')
      .assert.text('.notify.non-blocking-loader .message', 'loading data', 'text is correct')
    .done();
  },

  'should be able to hide a non-block ui loader': function(test) {
    test.open('http://localhost:3000/home')
    .wait(500)
    .click('[data-ut="enable-non-blocking-site-loader"]')
    .click('[data-ut="disable-non-blocking-site-loader"]')
      .assert.doesntExist('.notify.non-blocking-loader', 'loader is visible')
    .done();
  }
}