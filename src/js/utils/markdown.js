import marked from 'marked'
import high from 'highlight.js'

export function configMarked(){
  high.initHighlightingOnLoad()

  marked.setOptions({
    highlight: function (code) {
      return high.highlightAuto(code).value;
    }
  });
}
