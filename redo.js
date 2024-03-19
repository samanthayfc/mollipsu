function addClass(element, className) {
  if (!element.classList) {
    element.className += " " + className;
  } else {
    element.classList.add(className);
  }
}

addClass(document.getElementById("game"), "hidden");
