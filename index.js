var random = require('expo-random')

module.exports = (strength) => {
    return Buffer.from(random.getRandomBytes(strength));
  };