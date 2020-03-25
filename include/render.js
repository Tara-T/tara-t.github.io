window.$ = window.jQuery = require("jquery"); // not sure if you need this at all
window.Bootstrap = require("bootstrap");
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const path = require("path");
const url = require("url");
const { app, Menu, MenuItem } = require("electron").remote;

const customTitlebar = require("custom-electron-titlebar");

window.addEventListener("DOMContentLoaded", () => {
  let titlebar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex("#6f32c1"),
    icon: url.format("http://localhost:4400/media/frisk_512.png")
  });
  titlebar.updateMenu(menu);
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
// TODO: titlebar is not defined
// Until fixed this code will remain commented

const menu = new Menu();
menu.append(
  new MenuItem({
    label: "Item 1",
    submenu: [
      {
        label: "Subitem 1",
        click: () => console.log("Click on subitem 1")
      },
      {
        type: "separator"
      }
    ]
  })
);

menu.append(
  new MenuItem({
    label: "Item 2",
    submenu: [
      {
        label: "Subitem checkbox",
        type: "checkbox",
        checked: true
      },
      {
        type: "separator"
      },
      {
        label: "Subitem with submenu",
        submenu: [
          {
            label: "Submenu &item 1",
            accelerator: "Ctrl+T"
          }
        ]
      }
    ]
  })
);
