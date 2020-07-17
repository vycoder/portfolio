import plugin_gridsome_plugin_tailwindcss_5 from "/home/yev/Projects/portfolio/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_vue_remark_6 from "/home/yev/Projects/portfolio/node_modules/@gridsome/vue-remark/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"shouldImport":true,"shouldTimeTravel":true,"importUrlConfig":{"modernBrowser":true},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}}}
  },
  {
    run: plugin_gridsome_vue_remark_6,
    options: {}
  }
]
