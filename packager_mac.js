var opts = {
  appPath: "./build/darwin/Tara-t app-darwin-x64/Tara-t app.app",
  out: "./dist/darwinInstaller/",
  name: "Tara-t app",
  title: "Tara's installer",
  icon: "./media/frisk_512.icns",
  overwrite: true,
  debug: true,
  contents: function(opts) {
    return [
      { x: 448, y: 344, type: "link", path: "/Applications" },
      { x: 192, y: 344, type: "file", path: opts.appPath }
    ];
  }
};

var createDMG = require("electron-installer-dmg");
createDMG(opts, function done(err) {});
