const iosVersion = require('standard-version-expo/ios');
const androidVersion = require('standard-version-expo/android');
const expoVersion = require('standard-version-expo')


const customIosVersion = {
  readVersion: iosVersion.readVersion,
  writeVersion: function(contents, version) {
    return iosVersion.writeVersion(contents, version.replace('-', 'a'));
  },
};

const customAndroidVersion = {
  readVersion: androidVersion.readVersion,
  writeVersion: androidVersion.writeVersion
};

const customExpoVersion = {
  readVersion: expoVersion.readVersion,
  writeVersion: function(contents, version) {
    return expoVersion.writeVersion(contents, version.replace('-', 'a'));
  },
};

const runtimeVersion = {
  readVersion: expoVersion.readVersion,
  writeVersion: function(contents, version) {
    return expoVersion.writeVersion(contents, version.replace('-', 'a'));
  },
};
module.exports = {
  bumpFiles: [
    {
      filename: 'package.json',
    },
    {
      filename: 'app.json',
      updater: require.resolve('standard-version-expo'),
    },
    {
      filename: 'app.json',
      updater: require.resolve('standard-version-expo/android'),
    },
    {
      filename: 'app.json',
      updater: require.resolve('standard-version-expo/ios'),
    },
  ],
}
