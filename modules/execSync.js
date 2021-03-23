const execSync = require('child_process').execSync;

let player = 'mpv --quiet --no-video'

function e(arg)
{
    return execSync(`${player} ${arg}`, { stdio: [0, 1, 2] });
}

module.exports = { e }

