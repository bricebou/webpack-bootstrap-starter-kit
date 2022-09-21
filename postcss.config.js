const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = ({ env }) => ({
  plugins: [
    require('autoprefixer'),
    env === 'production' ? require('cssnano')({preset: 'default' }) : false,
    env === 'production' ? purgecss({
      content: ['./public/**/*.html']
    }) : false,
  ]
})