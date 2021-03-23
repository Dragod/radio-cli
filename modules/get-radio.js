
args = require('./argv')

const exec = require('./execSync.js');

let radio =
{
    "cc": "https://icecast.unitedradio.it/Radio105.mp3",
    "rtl": "https://streamingv2.shoutcast.com/rtl-1025",
    "virgin":"https://icecast.unitedradio.it/Virgin.mp3",
    "dj": "https://radiodeejay-lh.akamaihd.net/i/RadioDeejay_Live_1@189857/master.m3u8",
    "italia": "https://radioitaliasmi-lh.akamaihd.net/i/radioitaliasmi_1@329643/master.m3u8",
    "subasio": "https://icy.unitedradio.it/Subasio.mp3",
    "mc2": "https://edge.singsingmusic.net/MC2.mp3",
    "rai1": "https://icestreaming.rai.it/1.mp3",
    "rai2": "https://icestreaming.rai.it/2.mp3",
    "rai3": "https://icestreaming.rai.it/3.mp3",
    "rds": "https://stream.rds.radio/audio/rds.stream_aac/chunklist.m3u8",
    "m2o": "https://radiom2o-lh.akamaihd.net/i/RadioM2o_Live_1@42518/master.m3u8",
    "kiss": "https://kisskiss.fluidstream.eu/KKItalia.aac?FLID=8",
    "sport": "https://mediahit.inmystream.it:9000/stream",
    "r789": "https://rblive80.it/radiobrand2/8348",
    "latte": "https://ice02.fluidstream.net/fluid016.aac?FLID=8",
    "arancia": "https://stream3.xdevel.com/audio0s975447-156/stream/icecast.audio"
}

function stream()
{
    if (args.getArgs('cc'))
    {
        exec.e(`${radio.cc}`)
    }
    else if (args.getArgs('rtl'))
    {
        exec.e(`${radio.rtl}`)
    }
    else if (args.getArgs('virgin'))
    {
        exec.e(`${radio.virgin}`)
    }
    else if (args.getArgs('dj'))
    {
        exec.e(`${radio.italia}`)
    }
    else if (args.getArgs('subasio'))
    {
        exec.e(`${radio.subasio}`)
    }
    else if (args.getArgs('mc2'))
    {
        exec.e(`${radio.mc2}`)
    }
    else if (args.getArgs('rai1'))
    {
        exec.e(`${radio.rai1}`)
    }
    else if (args.getArgs('rai2'))
    {
        exec.e(`${radio.rai2}`)
    }
    else if (args.getArgs('rai3'))
    {
        exec.e(`${radio.rai3}`)
    }
    else if (args.getArgs('m2o'))
    {
        exec.e(`${radio.m2o}`)
    }
    else if (args.getArgs('kiss'))
    {
        exec.e(`${radio.kiss}`)
    }
    else if (args.getArgs('sport'))
    {
        exec.e(`${radio.sport}`)
    }
    else if (args.getArgs('latteMiele'))
    {
        exec.e(`${radio.latte}`)
    }
    else if (args.getArgs('arancia'))
    {
        exec.e(`${radio.arancia}`)
    }
    else
    {
        console.log("\n\rPlease pass a valid radio name");
    }
}

module.exports = {stream}

