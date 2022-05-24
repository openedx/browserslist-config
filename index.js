const desktop = [
  'last 2 Chrome major versions',
  'last 2 Firefox major versions',
  'last 2 Safari major versions',
  'last 2 Edge major versions',
];

const mobile = [
  'last 3 ChromeAndroid major versions',
  'last 3 FirefoxAndroid major versions',
  'last 3 iOS major versions',
];

const supportedBrowsers = desktop.concat(mobile);

module.exports = supportedBrowsers;
