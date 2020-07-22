module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
};
