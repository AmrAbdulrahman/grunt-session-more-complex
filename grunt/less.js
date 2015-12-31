module.exports = function() {
  return {
    options: {
      outputSourceFiles: true
    },
    app: {
      files: {
        'build/styles/app.css': 'src/styles/app.less'
      }
    }
  };
};