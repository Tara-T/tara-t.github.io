const electronInstaller = require("electron-winstaller");
async function installer() {
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: "./Tara-T App-win32-x64",
      outputDirectory: "./dist/winInstaller/",
      authors: "Tara-t",
      exe: "Tara-T App.exe",
      setupIcon: "./media/frisk_512.ico",
      setupExe: "tara's installer.exe",
      noMsi: true,
      setupMsi: "installer.exe",
      loadingGif: "./media/loader.gif"
    });
    console.log("It worked!");
  } catch (e) {
    console.log(`No dice: ${e.message}`);
  }
}
installer();
