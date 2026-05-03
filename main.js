const { app, BrowserWindow } = require("electron");
const { platform } = require("node:process");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  console.log(platform);

  win.loadFile("index.html");
  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (platform !== "darwin") app.quit();
});
