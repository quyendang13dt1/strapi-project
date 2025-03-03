import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
declare const globalThis: any;

module.exports = ({ env }) => {
  // console.log("✅ Strapi plugins.ts is being loaded! === FILE TS");
  // const interval = setInterval(() => {
  //   console.log('load TEST 123', globalThis.CKEDITOR);
  //  }, 2000);

  // setTimeout(() => {
  //   if (globalThis.CKEDITOR) {
  //     class CustomMediaEmbedEditing extends globalThis.CKEDITOR.plugins
  //       .mediaEmbedEditing {
  //       init() {
  //         super.init();
  //         this.editor.config.define("mediaEmbed", {
  //           providers: [
  //             {
  //               name: "synthesia",
  //               url: /^https:\/\/share\.synthesia\.io\/embeds\/videos\/.*/,
  //               html: (match) => {
  //                 const url = match[0];
  //                 return `<iframe src="${url}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
  //               },
  //             },
  //           ],
  //         });
  //       }
  //     }
  //     globalThis.CKEDITOR.plugins.mediaEmbedEditing = CustomMediaEmbedEditing;
  //   }
  // }, 10000);

  return {
    "strapi-plugin-nested-populator": {
      config: {
        defaultDepth: 4, // Default is 6
      },
    },
    ckeditor: {
      enabled: true,
      config: {
        mediaEmbed: {
          previewsInData: true,
          providers: [
            {
              name: "synthesia",
              url: /^https:\/\/share\.synthesia\.io\/embeds\/videos\/.+/,
              html: (match) =>
                `<iframe src="${match[0]}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`,
            },
          ],
        },
      },
    },
  };
};
