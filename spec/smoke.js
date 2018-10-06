'use strict';

const assert = require('assert');

describe('webdriverajax smoke test', function testSuite() {
  this.timeout(process.env.CI ? 100000 : 10000);

  const wait = process.env.CI ? 10000 : 1000;

  it('sets up the interceptor', () => {
    assert.equal(typeof browser.setupInterceptor, 'function');
    browser.url('/');
    browser.setupInterceptor();
    const ret = browser.execute(() => {
      return window.__webdriverajax;
    });
    assert.deepEqual(ret.value, { requests: [] });
  });
});
