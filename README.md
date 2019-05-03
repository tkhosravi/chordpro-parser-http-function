# Chordpro Parser HTTP Function
Uses chordsheetsjs library
https://www.npmjs.com/package/chordsheetjs

# Call the Parser
gcloud functions call parseChordpro --data '{"data":"e3RpdGxlOiBMZXQgaXQgYmV9CntzdWJ0aXRsZTogQ2hvcmRTaGVldEpTIGV4YW1wbGUgdmVyc2lvbn0Ke0Nob3J1c30KCkxldCBpdCBbQW1dYmUsIGxldCBpdCBbQy9HXWJlLCBsZXQgaXQgW0ZdYmUsIGxldCBpdCBbQ11iZQpbQ11XaGlzcGVyIHdvcmRzIG9mIFtHXXdpc2RvbSwgbGV0IGl0IFtGXWJlIFtDL0VdIFtEbV0gW0Nd"}'
The chordpro text must be base-64 encoded

Result is returned as base-64 encoded string