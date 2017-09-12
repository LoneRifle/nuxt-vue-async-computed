module.exports = {
  build: {
    vendor: ['axios'] // Add axios in the vendor.bundle.js
  },
  plugins: [
    '~/plugins/common.js'
  ],
  loading: {
    color: '#4FC08D',
    failedColor: '#bf5050',
    duration: 1500
  }
}
