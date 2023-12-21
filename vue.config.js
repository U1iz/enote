const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        asar: true,
        // icon: './build/icon/favicon_256.ico',
        nsis: {
          oneClick: false,
          allowElevation: false,
          allowToChangeInstallationDirectory: true,
          // installerIcon: './build/icon/favicon_512.ico',
          // installerHeaderIcon: './build/icon/favicon_512.ico'
        }
      }
    }
  }
})