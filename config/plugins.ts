export default ({ env }) => ({
  seo: {
    enabled: true,
  },
  i18n: {
    enabled: true,
    config: {
      defaultLocale: "en",
      locales: ["en", "ar"],
    },
  },
  // upload: {
  //   config: {
  //     provider: "strapi-provider-upload-cloudflare",
  //     providerOptions: {
  //       accountId: env("STRAPI_UPLOAD_CLOUDFLARE_ACCOUNT_ID"),
  //       apiKey: env("STRAPI_UPLOAD_CLOUDFLARE_API_KEY"),
  //       variant: env("STRAPI_UPLOAD_CLOUDFLARE_VARIANT"),
  //     },
  //   },
  // },
});
