'use strict';

const axios = require('axios');

module.exports = {
  async afterCreate(result, data) {
    axios.post('https://api.vercel.com/v1/integrations/deploy/prj_nBhQ5ttUa3OdUyu8iqtVsIUY8mJe/FE9og6JUBB');
  },

  async afterUpdate(result, params, data) {
    axios.post('https://api.vercel.com/v1/integrations/deploy/prj_nBhQ5ttUa3OdUyu8iqtVsIUY8mJe/FE9og6JUBB');
  },
};
