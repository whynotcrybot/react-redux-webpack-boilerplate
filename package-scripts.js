const npsUtils = require('nps-utils')

const { rimraf, crossEnv, series } = npsUtils

module.exports = {
  scripts: {
    build: {
      description: 'Building in production environment.',
      default: series.nps('clean', 'build.build'),
      build: `${crossEnv('NODE_ENV=production')} webpack --config ./webpack/webpack.config.babel.js`
    },
    clean: {
      description: 'Clean dist folder.',
      default: rimraf('dist')
    },
    default: {
      description: 'Start project with pm2 on production.',
      script: `${crossEnv('NODE_ENV=production')} node dist/index.bundle.js`
    },
    dev: {
      default: 'webpack-dev-server --config ./webpack/webpack.config.babel.js'
    }
  }
}
