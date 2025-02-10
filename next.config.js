module.exports = {
    webpack: (config) => {
      config.cache = false; // Önbelleği kapat
      return config;
    },
  };
  