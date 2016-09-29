module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    openui5_preload: {
      component: {
        options: {
          resources: {
            cwd: '',
            prefix: '',
            src: [
              'webapp/**/*.js',
              'webapp/**/*.fragment.xml',
              'webapp/**/*.view.xml',
              'webapp/**/*.properties'
            ]
          },
          dest: '',
          compress: true
        },
        components: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-openui5');
  grunt.registerTask('default', ['openui5_preload']);
}
