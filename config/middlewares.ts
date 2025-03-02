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
          "script-src-elem": [
            "'self'",
            "https://cdn.ckeditor.com",
            "https://share.synthesia.io",
          ],
          "frame-src": [
            "'self'",
            "https://www.youtube.com",
            "https://www.youtube-nocookie.com",
            "https://share.synthesia.io",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://share.synthesia.io",
          ],
          "img-src": [
            "'self'",
            "data:",
            "https://i.ytimg.com",
            "https://share.synthesia.io",
          ],
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
