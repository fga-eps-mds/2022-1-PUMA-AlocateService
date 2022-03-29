module.exports = ({
  getSubject: (keywords) => {
    console.log(keywords);
    let subjectKeywords = new Map();
    keywords.forEach((keywordObject) => {
        if (!subjectKeywords.has(keywordObject.subjectid)) {
          subjectKeywords.set(keywordObject.subjectid, [keywordObject]);
          // console.log(subjectKeywords);
        } else {
          subjectKeywords.get(keywordObject.subjectid).push(keywordObject);
          // console.log(subjectKeywords);
        }
    });
    // console.log(subjectKeywords);
    /* eslint-disable max-len */
    subjectKeywords = new Map([...subjectKeywords.entries()].sort((a, b) => b[1].length - a[1].length));
    // console.log(subjectKeywords);
    const subjectKeywordsArray = Array.from(subjectKeywords);
    // console.log(subjectKeywordsArray);
    console.log('no metodo');
    console.log(subjectKeywordsArray);
    console.log(subjectKeywordsArray.length);
    if (subjectKeywordsArray.length === 1 || (subjectKeywordsArray[0][1].length > subjectKeywordsArray[1][1].length)) {
      /* eslint-disable prefer-destructuring */
      console.log('retorno');
      console.log(subjectKeywordsArray[0][0]);
      return { subjectid: subjectKeywordsArray[0][0] };
      // return subjectKeywordsArray[0][1].subjectid;
      // this.keywordsSelected =
    } else {
      throw new Error('Infelizmente houve um empate. Reavalie as palavras-chave e tente novamente')
    }

    console.log('retorno:');
    return keywords;
  }
})
