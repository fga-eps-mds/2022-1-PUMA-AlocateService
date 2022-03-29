const alocateRepository = require('../repository/AlocateRepository');
const utils = require('../util/alocate.utils')
module.exports = {
  getKeywords: () => {
    return new Promise((resolve, reject) => {
      try {
        resolve(alocateRepository.getKeywords());
      } catch (e) {
        reject(e);
      }
      resolve();
    });
  },
  getSubject: (keywords) => new Promise((resolve, reject) => {
    try {
      resolve(utils.getSubject(keywords));
    } catch (e) {
      reject(e);
    }
  }),
};
