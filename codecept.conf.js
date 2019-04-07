exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.walmart.ca/en/ip/',
      show: true,
      windowSize:'1680x1050',
    }
  },
  include: {
    I: './steps_file.js',
    pipPage: './pages/PIP.js'
  },
  plugins: {
    allure: {
      enabled:true,
    }
  },
  bootstrap: null,
  mocha: {},
  name: '.bin',
  timeout:10000
}