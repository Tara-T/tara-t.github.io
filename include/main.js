if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('/include/sw.js').then(function(registration) {
      console.log('Service worker registration succeeded:', registration);
    }, /*catch*/ function(error) {
      console.log('Service worker registration failed:', error);
    });
  } else {
    console.log('Service workers are not supported.');
  }

$(document).ready(function() {
  var checkbox = document.querySelector("input[name=mode]");
  var norskID = document.getElementById("norsk");
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      trans();
      document.documentElement.setAttribute("data-theme", "lighttheme");
    } else {
      trans();
      document.documentElement.setAttribute("data-theme", "darktheme");
    }
  });
  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };
  norskID.style.display = "none";
});

function englishShow() {
  var norskID = document.getElementById("norsk");
  var englishID = document.getElementById("english");
  norskID.style.display = "none";
  englishID.style.display = "";
}
function norskShow() {
  var norskID = document.getElementById("norsk");
  var englishID = document.getElementById("english");
  norskID.style.display = "";
  englishID.style.display = "none";
}

