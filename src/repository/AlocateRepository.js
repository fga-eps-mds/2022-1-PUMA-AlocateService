const db = require('../../dbconfig/dbConfig');

module.exports = {
  getKeywords: () => {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT k.keywordid, k.keyword, s.subjectid FROM summarize JOIN subject s ON summarize.subjectid = s.subjectid JOIN keyword k ON summarize.keywordid = k.keywordid',
      ).then((response) => {
        resolve(response.rows);
      }).catch((response) => {
        reject(response);
      });
    });
  },
}
