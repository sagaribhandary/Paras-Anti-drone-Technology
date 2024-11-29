const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load your local HTML file (replace 'index.html' with your main HTML file)
    win.loadFile(path.join(__dirname, 'index.html'));

    win.on('closed', () => {
        win = null;
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        contextIsolation: false, // For older Electron versions
        enableRemoteModule: true, 
        webSecurity: false       
    }
});


  