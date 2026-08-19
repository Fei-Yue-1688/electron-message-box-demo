const { app, dialog } = require('electron');

app.whenReady().then(() => {
  dialog.showMessageBoxSync({
    type: 'info',
    title: 'Electron Demo',
    message: '应用已经启动',
    detail: '这是一个使用 dialog.showMessageBoxSync() 的最小示例。'
  });
});

app.on('window-all-closed', () => {
  app.quit();
});
