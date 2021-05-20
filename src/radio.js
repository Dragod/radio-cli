
const listen = require('../modules/get-radio');

const args = require('../modules/argv')

const commandExists = require('command-exists');

let os = require('os');

platform = os.platform();

if (args.getArgs('channels')) {
    listen.channels();
}
else
{
    commandExists('mpv', function(err, commandExists) {

        if (commandExists) {
            // proceed confidently knowing this command is available
            console.log("\r\nMpv player installed. Running stream...\r\n");
            listen.stream();
        }
        else
        {
            if (platform === "win32") {
                return console.log(`\r\n Mpv player is not installed: Value is: ${err}.\r\n\n Please install from: https://mpv.io/installation/ then try again.\r`);
            }
            else if (platform === "android")
            {
                return console.log(`\r\n Mpv player is not installed: Value is: ${err}.\r\n\n Please install do a "pkg install mpv" on termux CLI then try again.\r`);
            }
        }
    });
}
