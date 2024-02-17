const { i18n } = require("./next-i18next.config");

module.exports = {
  rewrites: async () => {
    return [
      {
        source: `/:locale(${i18n.locales.join("|")})?/:path*`,
        destination: "/:path*",
      },
    ];
  },
};
