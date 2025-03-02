console.log("🔥 Lifecycle hooks loaded!");
strapi.log.info("Lifecycle hooks loaded!");
module.exports = {
  async afterCreate({ result }) {
    debugger;
    console.log("🔥 Article mới được tạo:", result);
  },
  async afterDelete({ result }) {
    console.log("🗑 Article đã bị xóa:", result);
  },
};
