const argv = require('minimist')(process.argv.slice(2),
{
    boolean:
    [
        'cc',
        'rtl',
        'virgin',
        'dj',
        'italia',
        'subasio',
        'mc2',
        'rai1',
        'rai2',
        'rai3',
        'm2o',
        'kiss',
        'sport',
        'latte',
        'arancia',
        'channels'
    ],
    alias: {},
    unknown: function(){
        console.log(`\r\n Flag not found.`)
        console.log(`\r\n Available flag: --cc, --rtl, --virgin, --dj, --italia, --subasio, --mc2, --rai1, --rai2, --rai3, --m2o, --kiss, --sport, --latteMiele, --arancia, --channels`);
    }
    });

function getArgs(arg)
{
    let args =
    {
        "cc": argv.cc,
        "rtl": argv.rtl,
        "virgin": argv.virgin,
        "dj": argv.dj,
        "italia": argv.italia,
        "subasio": argv.subasio,
        "mc2": argv.mc2,
        "rai1": argv.rai1,
        "rai2": argv.rai2,
        "rai3": argv.rai3,
        "m2o": argv.m2o,
        "kiss": argv.kiss,
        "sport": argv.sport,
        "latte": argv.latte,
        "arancia": argv.arancia,
        "channels": argv.channels

    };
    return args[arg] ;
}

module.exports = {getArgs}