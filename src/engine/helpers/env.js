export default Object.freeze({
  isDev: () => (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local'),
  isProd: () => (process.env.NODE_ENV === 'production'),
});
