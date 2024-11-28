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

// Other browsers are not officially supported by Open edX, but
// adding these is strongly recommended by browserslist, so we do so:
// https://github.com/browserslist/browserslist?tab=readme-ov-file#best-practices
const bestPractices = [
  'last 2 versions',
  'not dead',
  '> 0.2%',
];

module.exports = [
  ...desktop,
  ...mobile,
  ...bestPractices,
];
