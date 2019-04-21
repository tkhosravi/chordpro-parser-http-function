const ChordSheetJS = require('chordsheetjs');

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.parseChordpro = (req, res) => {
  const chordSheet = req.body;
  const parser = new ChordSheetJS.ChordProParser();
  res.send(parser.parse(chordSheet));
};
