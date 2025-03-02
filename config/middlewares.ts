// export default [
//   "strapi::logger",
//   "strapi::errors",
//   "strapi::security",
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
// ];

module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "https://cdn.ckeditor.com",
          ],
          "script-src-elem": ["'self'", "https://cdn.ckeditor.com"],
        },
      },
    },
  },
];

// export default [
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "script-src": ["https://cdn.ckeditor.com"],
//           "connect-src": ["https://proxy-event.ckeditor.com"],
//         },
//       },
//     },
//   },
// ];
