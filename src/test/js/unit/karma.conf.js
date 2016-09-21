'use strict';

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../../../',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'src/main/resources/public/bower_components/angular/angular.min.js',
            'src/main/resources/public/bower_components/jquery/dist/jquery.min.js',
            'src/main/resources/public/bower_components/bootstrap/dist/js/bootstrap.min.js',

            'src/main/resources/public/js/greeting.js',

            'src/test/js/unit/**/*-spec.js'
        ],

        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/node_modules-preprocessor
        preprocessors: {
            'src/main/resources/public/scripts/**/*.js': ['coverage']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/main/resources/public/',
            moduleName: 'wedding'
        },

        // list of files to exclude
        exclude: [
            'src/test/js/unit/karma.conf.js'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/node_modules-reporter
        // e.g. ['dots', 'junit', 'progress', 'coverage']
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: 'target/coverage/'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: false,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/node_modules-launcher
        browsers: ['PhantomJS']
    });
};