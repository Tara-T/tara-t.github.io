if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register("/include/sw.js").then(
    function(registration) {
      console.log("Service worker registration succeeded:", registration);
    },
    /*catch*/ function(error) {
      console.log("Service worker registration failed:", error);
    }
  );
} else {
  console.log("Service workers are not supported.");
}

//This function will be called when the toggle is pressed
function colorChange() {
  //Find the button which will be checked if it's checked or not
  var colorPreferance = document.getElementById("colorPreferance");
  if (colorPreferance.checked == true) {
    preferesDark();
  } else {
    preferesLight();
  }
}

//Fancy transition between dark mode and light mode
let trans = () => {
  //Add class
  document.documentElement.classList.add("transition");
  //Wait for the animation to finish then remove the class
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
//IE8 ready function
function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    document.attachEvent("onreadystatechange", function() {
      if (document.readyState != "loading") fn();
    });
  }
}
//More custom when ready function, this is where the sweats go
function whenReady() {
  try {
    //Try to see if you can get this box, otherwise the site doesn't support translations
    var norskID = document.getElementById("norsk");
    norskID.style.display = "none";
  } catch (err) {
    console.log("Translation is not supported");
  }

  var preferedColorScheme = localStorage.getItem("colorMode");
  //If the user already has a preferance respect it
  if (preferedColorScheme == "Dark") {
    preferesDark();
  } else if (preferedColorScheme == "Light") {
    preferesLight();
  } else {
    //If they don't then make them use dark mode like a normal person
    preferesDark();
  }
}

function englishShow() {
  var norskID = document.getElementById("norsk");
  var englishID = document.getElementById("english");
  //Hide and show the correct translation on button press
  norskID.style.display = "none";
  englishID.style.display = "";
}
function norskShow() {
  var norskID = document.getElementById("norsk");
  var englishID = document.getElementById("english");
  norskID.style.display = "";
  englishID.style.display = "none";
}

// This function is used whenever dark preferance is used
function preferesDark() {
  //Start the transition
  trans();
  //Save the preferance
  localStorage.setItem("colorMode", "Dark");
  //Check the box to make it look like dark mode is enabled
  document.getElementById("colorPreferance").checked = true;
  //Add the dark mode css
  document.getElementById("colorScheme").innerHTML =
    '<link rel="stylesheet" type="text/css" href="/include/dark.css">';
}

// This function is used whenever light preferance is used
function preferesLight() {
  //Start the transition
  trans();
  //Save the preferance
  localStorage.setItem("colorMode", "Light");
  document.getElementById("colorPreferance").checked = false;
  document.getElementById("colorScheme").innerHTML =
    '<link rel="stylesheet" type="text/css" href="/include/light.css">';
}

//When the user changes their native color scheme make sure to change too
function handleColorChange(event) {
  if (event.matches) {
    // Dark mode
    preferesDark();
  } else {
    //There are only 2 options possible, so it should be fine
    preferesLight();
  }
}
var mql = matchMedia("(prefers-color-scheme: dark)");
mql.onchange = handleColorChange;
ready(whenReady);
