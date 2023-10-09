const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')

const createWindow = async () => {
    const win = new BrowserWindow({
        title: "Electron App",
        width: 600,
        height: 400,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
          }
    })

    await win.loadFile('index.html');
}

// //templete menu
// const templeteMenu = [
    
// ]

// const menu = Menu.buildFromTemplate(templeteMenu);
// Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })