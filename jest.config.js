module.exports = {
  // ... other Jest configuration options

  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    'upday-web-components/imageComponent': 'upday-react-library/node_modules/upday-web-components/imageComponent.js',
  },
  type: 'module',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    "^.+\\.jsx?$": "babel-jest",
    'upday-web-components/imageComponent': 'babel-jest',
  },
};
