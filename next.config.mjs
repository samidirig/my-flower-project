/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/', // Bu kısmı değiştirerek video çıktı dizinini ayarlayabilirsiniz
            outputPath: 'static/videos/', // Bu kısmı değiştirerek video çıktı dizinini ayarlayabilirsiniz
            name: '[name].[ext]',
            esModule: false,
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  