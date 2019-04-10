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
      outputDir: './output/reports/allure/',
    },
    stepByStepReport: {
     enabled: false,
     deleteSuccessful:false,
     //output:'./output/reports',
   }
  },
  multiple: {
    parallel: {
      chunks: 2
    }
  },
  bootstrap: null,
  mocha: {},
  timeout:10000
}