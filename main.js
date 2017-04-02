const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
    // creates the browser window
    mainWindow = new BrowserWindow({width: 800, height: 600});
    // renders index.html which will contain the root Vue component
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // dereference to the mainWindow object when the window is closed
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

// calls the createWindow() method when Electron has finished initializing
app.on('ready', createWindow);

// when all windows are closed, quits the application on Windows/Linux
app.on('window-all-closed', function () {
    // only quits the application on OS X if the user hits cmd + q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // will re-create the mainWindow if the dock icon is clicked in OS X and no other
    // windows were open
    if (mainWindow === null) {
        createWindow();
    }
});
