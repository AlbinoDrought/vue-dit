const axios = require('axios');

export default axios.defaults.transformResponse.concat(data =>
  data.data.children.map(item => item.data),
);
