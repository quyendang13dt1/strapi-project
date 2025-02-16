module.exports = ({ env }) => ({
  "strapi-plugin-nested-populator": {
    config: {
      defaultDepth: 4, // Default is 6
    },
  },
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        toolbar: ["mediaEmbed"],
        mediaEmbed: {
          previewsInData: true,
        },
      },
    },
  },
});
