const ChordSheetJS = require('chordsheetjs');

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.helloHttp = (req, res) => {
  const name =
    req.query && req.query.name
      ? req.query.name
      : req.body && req.body.name
      ? req.body.name
      : 'World';
  res.send(`Hello ${ChordSheetJS(name)}!`);
};
