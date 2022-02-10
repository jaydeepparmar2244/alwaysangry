function myFunction() {
    var x = document.getElementById("hulk-links");
    if (x.className === "hulk-class") {
      x.className += " responsive";
    } else {
      x.className = "hulk-class";
    }
  } 