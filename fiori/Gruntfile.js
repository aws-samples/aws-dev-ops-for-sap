module.exports = function (grunt) {

    //DOC: https://www.npmjs.com/package/grunt-nwabap-ui5uploader

    var sUser = grunt.option('user');
    var sPwd = grunt.option('pwd');
    var sServer = grunt.option('server');

    grunt.initConfig({
        nwabap_ui5uploader: {
            options: {
                conn: {
                    server: sServer,
                    useStrictSSL: false
                },
                auth: {
                    user: sUser,
                    pwd: sPwd
                }
            },
            upload_build: {
                options: {
                    ui5: {
                        package: '$TMP',
                        bspcontainer: 'z_sap_fiori_app',
                        bspcontainer_text: 'test App',
                    },
                    resources: {
                        cwd: 'dist',
                        src: '**/*.*'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-nwabap-ui5uploader');

    grunt.registerTask('deploy', ['nwabap_ui5uploader']);

};