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

  // ckeditor: {
  //   enabled: true,
  //   config: {
  //     plugin: {
  //       removePlugins: [],
  //       addPlugins: [
  //         "Font",
  //         "Highlight",
  //         "Alignment",
  //         "Strikethrough",
  //         "Subscript",
  //         "Superscript",
  //       ],
  //     },
  //     editor: {
  //       toolbar: {
  //         items: [
  //           "heading",
  //           "bold",
  //           "italic",
  //           "underline",
  //           "strikethrough",
  //           "|",
  //           "fontSize",
  //           "fontFamily",
  //           "fontColor",
  //           "fontBackgroundColor",
  //           "|",
  //           "alignment",
  //           "outdent",
  //           "indent",
  //           "bulletedList",
  //           "numberedList",
  //           "|",
  //           "highlight",
  //           "subscript",
  //           "superscript",
  //           "|",
  //           "link",
  //           "blockQuote",
  //           "imageUpload",
  //           "mediaEmbed",
  //           "|",
  //           "insertTable",
  //           "undo",
  //           "redo",
  //         ],
  //       },
  //       fontSize: {
  //         options: ["tiny", "small", "default", "big", "huge"],
  //       },
  //       fontFamily: {
  //         options: [
  //           "default",
  //           "Arial",
  //           "Courier New",
  //           "Georgia",
  //           "Times New Roman",
  //           "Verdana",
  //         ],
  //       },
  //       fontColor: {
  //         colors: [
  //           { color: "black", label: "Black" },
  //           { color: "red", label: "Red" },
  //           { color: "blue", label: "Blue" },
  //           { color: "green", label: "Green" },
  //           { color: "yellow", label: "Yellow" },
  //         ],
  //       },
  //       fontBackgroundColor: {
  //         colors: [
  //           { color: "white", label: "White" },
  //           { color: "lightgray", label: "Light Gray" },
  //           { color: "yellow", label: "Yellow" },
  //           { color: "lightgreen", label: "Light Green" },
  //           { color: "lightblue", label: "Light Blue" },
  //         ],
  //       },
  //     },
  //   },
  // },
});

// // export default {
// //   ckeditor: {
// //     enabled: true,
// //     config: {
// //       toolbar: [
// //         "heading",
// //         "|",
// //         "bold",
// //         "italic",
// //         "|",
// //         "link",
// //         "blockQuote",
// //         "mediaEmbed",
// //         "|",
// //         "undo",
// //         "redo",
// //       ],
// //       mediaEmbed: {
// //         previewsInData: true,
// //       },
// //     },
// //   },
// // };

// // module.exports = ({ env }) => ({
// //   ckeditor: {
// //     enabled: true,
// //   },
// // });
