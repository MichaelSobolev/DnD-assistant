const axios = require('axios').default;

function dndApi(url) {
  return axios.get(url).then(response => response.data)
}


module.exports = dndApi
