module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['<%= answers.testFramework %>', '<%= answers.matcherFramework %>'],
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ]
  });
};
