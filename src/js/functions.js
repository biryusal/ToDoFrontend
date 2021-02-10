export function inputHandler(id) {
  let input = document.getElementById(id);

  if (input.innerText.includes("//")) {
    input.innerHTML = input.innerText.slice(0, input.innerText.indexOf("//")) + `<span id = "task__input_golden" class = "task__input_color_golden">
    ${input.innerText.slice(input.innerText.indexOf("//"))}</span>`;
    placeCaretAtEnd(input);
  }

  else {
    document.querySelector("#task__input_golden").classList.remove("task__input_color_golden");
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