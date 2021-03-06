/**
 * Created by andreafspeziale on 25/01/17.
 */
module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            task: {
                src: ['layout.jade']
            },
            options: {}
        },
        watch: {
            bower: {
                files: ['bower_components/*'],
                tasks: ['wiredep']
            },
            css: {
                files: './assets/css/*.styl',
                tasks: ['stylus'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: './**/*.jade',
                tasks: ['jade'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['./public/**/*.js'],
                tasks: ['concat'],
                options: {
                    livereload: true
                }
            }
        },
        jade: {
            compile: {
                options: {
                    pretty: false,
                    data: {
                        debug: true
                    }
                },
                files: [{
                    expand: true,
                    src: ["**/*.jade","!**/layout.jade"],
                    ext: '.html'
                }]
            }
        },
        stylus: {
            compile: {
                options: {
                    compress: true
                },
                files: {
                    'assets/css/main.css': ['assets/css/*.styl']
                }
            }
        },
        concat: {
            options: {
                separator: ''
            },
            angular: {
                src:  ['./public/*.js', './public/*/*.js', './public/**/*.js'],
                dest: './assets/js/concat.app.js'
            }
        },
    })
    grunt.registerTask('default', ['wiredep', 'stylus', 'jade',  'concat', 'watch']);
    grunt.registerTask('build', ['wiredep', 'stylus', 'jade',  'concat']);
}