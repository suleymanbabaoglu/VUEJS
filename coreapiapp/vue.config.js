module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 5353,
    proxy: {
      "/api": {
        target: "https://localhost:5001",
        changeOrigin: true,
        https: true
      }
    }
  }
};
