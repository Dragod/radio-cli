var commandExists = require('command-exists');

commandExists('mpva', function(err, commandExists) {

    if (commandExists) {
        // proceed confidently knowing this command is available
        console.log("exist!");
    }
    else
    {
        return console.log(`Mpv player is not installed: Value is: ${ err }. Please install it from: https://mpv.io/installation/`);
     }

});