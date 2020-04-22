module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_base.scss";
          @import "@/styles/_typography.scss";
          @import "@/styles/_utilities.scss";
        `
      }
    }
  },
  publicPath: "./"
};