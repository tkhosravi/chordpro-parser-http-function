const ChordSheetJS = require('chordsheetjs').default;
const base64 = require('base-64');
const utf8 = require('utf8');

function handlePOST(req, res) {
  var bytes = base64.decode(req.body.data);
  const chordSheet = utf8.decode(bytes);
  const parser = new ChordSheetJS.ChordProParser();
  const song = parser.parse(chordSheet);
  var formatter = new ChordSheetJS.TextFormatter();
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
  var disp = formatter.format(song);
  bytes = utf8.encode(disp);
  var encoded = base64.encode(bytes);
  res.send(encoded);
}

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.parseChordpro = (req, res) => {
  switch (req.method) {
    case 'POST':
      handlePOST(req, res);
      break;
    default:
      res.status(405).send({error: 'Method Not Allowed!'});
      break;
  }
};
