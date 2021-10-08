require('dotenv').config();

module.exports = {
    configEnv: () => {
      if (process.env.ENVIRONMENT === 'dev') {
        global.DB_URL = process.env.DB_URL;
      } else if(process.env.ENVIRONMENT === 'test') {
        global.DB_URL = process.env.DB_URL_TEST;
      }
    },
  };
  