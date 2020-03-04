module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['*.js']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: '*.css'
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: '*.html'
    },
    mocha: {
      test: {
        src: ['test/index.html'],               
      },
      options: {
        run: true,
        reporter: 'Spec'                      
      }      
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false                        
      },
      iles: {
        src: './index.html',
        dest: 'dist/index.html'                        
      }    
    },
    cssmin: {
      'dist/rectangle.css': 'rectangle.css'            
    },
    uglify: {
      release:{
        files: {
          'dist/rectangle.js': 'rectangle.js',
          'dist/calc.js': 'calc.js'                            
        }
      } 
    },      
    eminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist'
      }
    },
    usemin: {
      html: ['dist/index.html']
    },
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['rectangle.js', 'calc.js'],
        dest: 'dist/bundle.js'
      }
    },
    clean: ['dist/bundle.js', '.tmp'],
    copy: {
      html: {
        src: './index.html',
        dest: './dist/index.html'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('default', ['mocha']);
  grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify']);

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['copy', 'useminPrepare', 'concat', 'uglify', 'usemin', 'cssmin', 'htmlmin', 'clean']);
};

