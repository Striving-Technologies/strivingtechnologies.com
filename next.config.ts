// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }
//     return config
//   }
// }

// module.exports = {
//   webpack5: false,
//   webpack: (config) => {
//     config.node = {
//       dns: "mock",
//       fs: "empty",
//       path: true,
//       url: false,
//     };
//     return config;
//   },
// };

module.exports = {
  webpack: (config: any, { isServer }: { isServer: any }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config;
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
  },
};
