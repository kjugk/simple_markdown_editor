import marked from 'marked'
export function configMarked(){
  var high = require('highlight.js')
  high.initHighlightingOnLoad()

  marked.setOptions({
    highlight: function (code) {
      return high.highlightAuto(code).value;
    }
  });
}
