const { app, BrowserWindow } = require("electron");
const path = require("path");
require("electron-reload")(__dirname);
// ./main.js
const contextMenu = require("electron-context-menu");
const { shell } = require("electron");
const { exec, spawn } = require("child_process");
const Shell = require("node-powershell");

// Add an item to the context menu that appears only when you click on an image
// contextMenu({
// 	prepend: (params, browserWindow) => [{
//     label: 'Rainbow',

// 		// Only show it when right-clicking images
// 		visible: params.mediaType === 'image'
//   },
//   {
//     role: "zoomIn"
//     // If you want to change the label "Zoom In"
//     // label: "Custom Zoom In Text"
// },
// {
//   role: "zoomOut"
//   // If you want to change the label "Zoom Out"
//   // label: "Custom Zoom Out Text"
// },
// {
//   role: "reload"
//   // If you want to change the label "Zoom Out"
//   // label: "Custom Zoom Out Text"
// },
// {
//   role: "selectAll"
//   // If you want to change the label "Zoom Out"
//   // label: "Custom Zoom Out Text"
// },
// ]
// });

// Your code that starts a new application
(async () => {
  await app.whenReady();
})();

function createWindow() {
  // Create the browser window.
  // shell.openExternal('https://github.com')
  shell.beep();

  
  // console.log(process.platform);
  const userOS = process.platform;

  if (userOS === "win32") {
  
    const isRunning = (query, cb) => {
      let platform = process.platform;
      let cmd = "";
      switch (platform) {
        case "win32":
          cmd = `tasklist`;
          break;
        case "darwin":
          cmd = `ps -ax | grep ${query}`;
          break;
        case "linux":
          cmd = `ps -A`;
          break;
        default:
          break;
      }
      const exec = require("child_process").exec;
      exec(cmd, (err, stdout, stderr) => {
        cb(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
        // console.log(stdout)
      });
    };
  
    // clearInterval(killSwitch);
    const acrokillSwitch = setInterval(() => {
      isRunning("acrotray.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "acrotray.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die acrotray!'")
            console.log("acrotray died")
          });
          console.log("acro tray running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);
    const CCXProcesskillSwitch = setInterval(() => {
      isRunning("CCXProcess.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "CCXProcess.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die CCXProcess!'")
            console.log("CCXProcess died")
  
          });
          console.log("CCXProcess running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);
  
    const AdobeIPCBrokerkillSwitch = setInterval(() => {
      isRunning("AdobeIPCBroker.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "AdobeIPCBroker.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die AdobeIPCBroker!'")
            console.log("AdobeIPCBroker died")
  
          });
          console.log("AdobeIPCBroker running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 1000);
  
    const AdobeCEFHelperkillSwitch = setInterval(() => {
      isRunning("Adobe CEF Helper.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "Adobe CEF Helper.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die Adobe CEF Helper!'")
            console.log("Adobe CEF Helper died")
  
          });
          console.log("Adobe CEF Helper running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 1000);
  
    
  const AcrobatNotificationClientkillSwitch = setInterval(() => {
      isRunning("AcrobatNotificationClient.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "AcrobatNotificationClient.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die AcrobatNotificationClient!'")
            console.log("AcrobatNotificationClient died")
  
          });
          console.log("AcrobatNotificationClient running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);
   
    const AdobeCollabSynckillSwitch = setInterval(() => {
      isRunning("AdobeCollabSync.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "AdobeCollabSync.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die AdobeCollabSync!'")
            console.log("AdobeCollabSync died")
  
          });
          console.log("AdobeCollabSync running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);
  


    const CoreSynckillSwitch = setInterval(() => {
      isRunning("CoreSync.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "CoreSync.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die CoreSync!'")
            console.log("CoreSync died")
  
          });
          console.log("CoreSync running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);

    const CCLibrarykillSwitch = setInterval(() => {
      isRunning("CCLibrary.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "CCLibrary.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die CCLibrary!'")
            console.log("CCLibrary died")
  
          });
          console.log("CCLibrary running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);


    const AdobeDesktopServicekillSwitch = setInterval(() => {
      isRunning("Adobe Desktop Service.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "Adobe Desktop Service.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die Adobe Desktop Service!'")
            console.log("Adobe Desktop Service died")
  
          });
          console.log("Adobe Desktop Service running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);



    const CRWindowsClientServicekillSwitch = setInterval(() => {
      isRunning("CRWindowsClientService.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "CRWindowsClientService.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die CRWindowsClientService!'")
            console.log("CRWindowsClientService died")
  
          });
          console.log("CRWindowsClientService running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);


    const CreativeCloudHelperkillSwitch = setInterval(() => {
      isRunning("Creative Cloud Helper.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "Creative Cloud Helper.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die Creative Cloud Helper!'")
            console.log("Creative Cloud Helper died")
  
          });
          console.log("Creative Cloud Helper running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);




    // const RuntimeBrokerkillSwitch = setInterval(() => {
    //   isRunning("RuntimeBroker.exe", (status) => {
    //     console.log(status); // true|false
    //     if (status === true) {
    //       exec('taskkill /IM "RuntimeBroker.exe" /F', (err, stdout, stderr) => {
    //         // cb(stdout);
    //         console.log(stdout)
    //         console.log("'Die RuntimeBroker!'")
    //         console.log("RuntimeBroker died")
  
    //       });
    //       console.log("RuntimeBroker running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
    //     }
    //   });
    // }, 2000);





    const AdobeNotificationClientkillSwitch = setInterval(() => {
      isRunning("AdobeNotificationClient.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "AdobeNotificationClient.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die AdobeNotificationClient!'")
            console.log("AdobeNotificationClient died")
  
          });
          console.log("AdobeNotificationClient running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);

    const AdobeNotificationHelperkillSwitch = setInterval(() => {
      isRunning("AdobeNotificationHelper.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "AdobeNotificationHelper.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die AdobeNotificationHelper!'")
            console.log("AdobeNotificationHelper died")
  
          });
          console.log("AdobeNotificationHelper running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);

    const AcroCEFkillSwitch = setInterval(() => {
      isRunning("AcroCEF.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "AcroCEF.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die AcroCEF!'")
            console.log("AcroCEF died")
  
          });
          console.log("AcroCEF running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);



    const AcrobatkillSwitch = setInterval(() => {
      isRunning("Acrobat.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "Acrobat.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die Acrobat!'")
            console.log("Acrobat died")
  
          });
          console.log("Acrobat running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);



    const CCkillSwitch = setInterval(() => {
      isRunning("Creative Cloud.exe", (status) => {
        console.log(status); // true|false
        if (status === true) {
          exec('taskkill /IM "Creative Cloud.exe" /F', (err, stdout, stderr) => {
            // cb(stdout);
            console.log(stdout)
            console.log("'Die Creative Cloud!'")
            console.log("Creative Cloud died")
  
          });
          console.log("Creative Cloud running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
        }
      });
    }, 2000);
    // const cortanakillSwitch = setInterval(() => {
    //   isRunning("SearchUI.exe", (status) => {
    //     console.log(status); // true|false
    //     if (status === true) {
    //       exec('taskkill /IM "SearchUI.exe" /F', (err, stdout, stderr) => {
    //         // cb(stdout);
    //         console.log(stdout)
    //         console.log("'Die CORTASNANA!'")
    //         console.log("Cortana died")
  
    //       });
    //       console.log("Cortana running........Adobeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!!!!");
    //     }
    //   });
    // }, 500);

    acrokillSwitch;
    CCXProcesskillSwitch;
    AdobeIPCBrokerkillSwitch
    AdobeCEFHelperkillSwitch
    AcrobatNotificationClientkillSwitch
    AdobeCollabSynckillSwitch
    CoreSynckillSwitch
    CCLibrarykillSwitch
    AdobeDesktopServicekillSwitch
    CRWindowsClientServicekillSwitch
    // RuntimeBrokerkillSwitch
    CreativeCloudHelperkillSwitch
    AdobeNotificationClientkillSwitch
    AdobeNotificationHelperkillSwitch
    AcroCEFkillSwitch
    AcrobatkillSwitch
    CCkillSwitch
    // cortanakillSwitch
  }
 
  const mainWindow = new BrowserWindow({
    title: "Shyaboi",
    icon: __dirname + "./sinbad.png",
    // frame: false,
    // titleBarStyle: 'customButtonsOnHover',
    transparent: true,
    frame: false,
    width: 700,
    height: 777,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
