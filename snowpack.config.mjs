/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/static' }
  },
  plugins: [
    [
      'snowpack-plugin-hash',
    ],
    '@snowpack/plugin-sass',
    '@prefresh/snowpack', 
    [
      '@snowpack/plugin-optimize',
      {
        'preloadCSS': true
      }
    ],
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // { "match": "routes", "src": ".*", "dest": "/index.html" },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": process.env.GITHUB_IO || false
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    metaUrlPath: 'snowpack' // change _snowpack directory to snowpack
  },
};
