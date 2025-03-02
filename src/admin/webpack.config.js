module.exports = (config) => {
    console.log('LOad WEBPACK');
    return {
      ...config,
      entry: {
        main: ["./src/admin/custom-ckeditor.js"],
      },
    };
  };
  