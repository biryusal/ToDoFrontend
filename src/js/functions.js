export function inputHandler(id) {
  let input = document.getElementById(id);

  if (input.innerHTML.includes("//")) {
    input.innerHTML = input.innerHTML.slice(0, input.innerHTML.indexOf("//")) + `<span class = "task__input_color_golden">${input.innerHTML.slice(input.innerHTML.indexOf("//"))}</span>`;
    placeCaretAtEnd(input);
  }
}

function placeCaretAtEnd(el) {
  el.focus();
  if (typeof window.getSelection != "undefined"
          && typeof document.createRange != "undefined") {
      var range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
  } else if (typeof document.body.createTextRange != "undefined") {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.collapse(false);
      textRange.select();
  }
}