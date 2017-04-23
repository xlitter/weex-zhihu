  const request = require('request-promise-native');

  const hostname = 'http://news-at.zhihu.com/api/4';

  function getPath(path) {
    return `${hostname}${path}`;
  }

  exports.query = function query(path) {
    return request(getPath(path));
  }