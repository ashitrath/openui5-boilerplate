'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-openui5');

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
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          port: 8000
        }
      }
    },

    openui5_connect: {
      server: {
        options: {
          appresources: 'webapp'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'openui5_preload',
    'openui5_connect'
  ]);
}
