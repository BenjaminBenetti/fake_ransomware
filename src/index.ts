import { app, BrowserWindow } from 'electron';
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

function createWindows() {
  let mainWindow = null;
  // Create the browser window.
  if (process.env.NODE_ENV === "development")
  {
    mainWindow = new BrowserWindow({
      width: 1920,
      height: 1080,
      webPreferences: {
         nodeIntegration: true
     }
    });

    //Open dev tools
    mainWindow.webContents.openDevTools();
  }
  else
  {
    mainWindow = new BrowserWindow({
      frame: false,
      center: true,
      movable: false,
      alwaysOnTop: true,
      fullscreen: true,
      webPreferences: {
         nodeIntegration: true
     }
    });
  }

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindows);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindows();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
