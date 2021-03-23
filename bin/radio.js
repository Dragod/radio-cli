#!/usr/bin/env node
const listen = require('../modules/get-radio');

let commandExists = require('command-exists');

commandExists('mpv', function(err, commandExists) {

    if (commandExists) {
        // proceed confidently knowing this command is available
        console.log("\r\nMpv player installed. Running stream...\r\n");
        listen.stream();
    }
    else
    {
        return console.log(`\r\n Mpv player is not installed: Value is: ${ err }.\r\n\n Please install from: https://mpv.io/installation/ then try again.\r`);
    }

});