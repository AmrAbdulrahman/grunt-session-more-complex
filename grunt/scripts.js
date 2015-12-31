var vendor = [
  // JQuery
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/jquery-ui/jquery-ui.min.js',

  // Lodash
  'bower_components/lodash/lodash.min.js',

  // Angular
  'bower_components/angular/angular.min.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'bower_components/ui-router/release/angular-ui-router.min.js',
];

// Src files
var src = [
  // App
  'src/app/app.js',
  'src/app/routes.js',

  // Services
  'src/app/services/calculator-srvc.js',

  // Controllers
  'src/app/states/landing/landing-ctrl.js'
];

// ES5 version
var build = [];
for (var i=0; i<src.length; i++) {
  build.push(src[i].replace('src', 'build'));
}

var specs = 'src/**/*.specs.js';

// because build is the es5 version
var karma = vendor.concat(build).concat(specs);

module.exports = {
  vendor: vendor,
  src: src,
  karma: karma
};