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
  const song = parser.parse(chordSheet);
  var formatter;
  if (req.query.format) {
    const format = req.query.format.toLowerCase();
    switch (format) {
      case "html","htmldiv":
        formatter = new ChordSheetJS.HtmlDivFormatter();
        break;
      case "htmltable":
        formatter = new ChordSheetJS.HtmlTableFormatter();
        break;
      default:
        formatter = new ChordSheetJS.TextFormatter();
    }
  }
  const disp = formatter.format(song);
  res.send(disp);
};
