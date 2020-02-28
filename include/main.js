var checkbox = document.querySelector('input[name=mode]');
 
document
  .getElementById("themeSwitch")
  .addEventListener("change", function(event) {
    event.target.checked
      ? document.body.setAttribute("data-theme", "light")
      : document.body.removeAttribute("data-theme");
  });
 
        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 1000)
        }
        