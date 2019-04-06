exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.walmart.ca/en/ip/',
      show: true,
      windowSize:'1680x1050',
      // resizeWindow:'maximize'
    }
  },
  include: {
    I: './steps_file.js',
    pipPage: './pages/PIP.js'
  },
  bootstrap: null,
  mocha: {},
  name: '.bin'
}