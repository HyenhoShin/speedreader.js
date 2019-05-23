(function() {
  "use strict";

  let currentType = "";
  let down = false;

  window.addEventListener("load", initialize);

  function initialize() {
    setUpTiles(); 
    $("clear").addEventListener("click", clearPuzzle);
  }

  window.addEventListener("mouseup", function() {
    currentType = "";
    down = false;
  });

  function changeBoxMark() {
    down = true;
    if (this.classList.contains("filled")) {
      this.classList.remove("filled");
      this.classList.add("crossed-out");
      currentType = "crossed-out";
    } else if (this.classList.contains("crossed-out")) {
      this.classList.remove("crossed-out");
      currentType = "";
    } else {
      this.classList.add("filled");
      currentType = "filled";
    }
  }

  function clearPuzzle() {
    if (confirm("Are you sure you want to clear the puzzle?")) {
      let boxes = qsa(".box");
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("filled", "crossed-out");
      }
    }
  }

  function dragBoxStatus() {
    if (down) {
      if (currentType == "") {
        this.classList.remove("crossed-out");
      } else if (currentType == "filled") {
        this.classList.add("filled");
        this.classList.remove("crossed-out");
      } else { // crossed-out
        this.classList.add("crossed-out");
        this.classList.remove("filled");
      }
    }
  }

  function setUpTiles() {
    let tiles = qsa(".box");
    for (let i = 0; i < tiles.length; i++) {
      let div = tiles[i];
      div.onmousedown = changeBoxMark;
      div.onmouseover = dragBoxStatus;
      div.addEventListener("click", function() {
        down = false;
        currentType = "";
      alert("You click the tile!")
      });
    }
  }

  function $(id) {
    return document.getElementById(id);
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
