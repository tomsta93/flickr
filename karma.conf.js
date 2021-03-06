'use strict';

module.exports = function (config) {
  let configuration = {
    basePath: '',
    frameworks: [
      'jasmine'
    ],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-babel-preprocessor',
      'karma-coverage'
    ],
    browsers: [
      'Chrome'
    ],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    reporters: [
      'progress',
      'coverage'
    ],
    files: [
      'dist/javascript/libs.min.js',

      'src/javascript/**/*.js',
      'test/javascript/**/*Spec.js',
      'test/javascript/**/*Dom.js',

      'test/test-main.js'
    ],
    exclude: [
      'src/javascript/lib/**/*.js'
    ],
    preprocessors: {
      'src/javascript/**/*.js': ['babel', 'coverage'],
      'test/javascript/**/*.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        getModuleId: function(moduleId) {
          return moduleId.replace(/.*.flickr/, '');
        }
      }
    },
    coverageReporter: {
      type: 'html',
      dir: 'test/coverage/javascript'
    }
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }
  config.set(configuration);
};
