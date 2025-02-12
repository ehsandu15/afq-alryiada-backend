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
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        service: "gmail",
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("DEFAULT_FROM_EMAIL"),
        defaultReplyTo: env("DEFAULT_REPLAY_TO_EMAIL"),
      },
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
