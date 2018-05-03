module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            presets: [ "es3", ["es2015", {"loose": true}]]
                        }],
                        ["browserify-shim"]
                    ],
                    browserifyOptions: {
                        standalone: '<%= pkg.name %>'
                    }
                },
                files: {
                    './dist/<%= pkg.name %>.js': ['./src/<%= pkg.name %>.js']
                }
            }
        }
        // browserify: {
        //     dist: {
        //         options: {
        //             transform: [
        //                 ["babelify", {
        //                     presets: [ "es3", ["es2015", {"loose": true}]]
        //                 }]
        //             ],
        //             browserifyOptions: {
        //                 standalone: '<%= pkg.name %>'
        //             },
        //             external: ['larkplayer']
        //         },
        //         files: {
        //             './lib/<%= pkg.name %>.js': ['./src/<%= pkg.name %>.js']
        //         }
        //     }
        // }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default', ['browserify']);
};