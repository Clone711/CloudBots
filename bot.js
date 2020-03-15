var Discord = require('discord.io');
var auth = require('./auth.json');
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('message', message => {
    if (message.content.substring(0, 1) == '!') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
	var msg = args[1];
       
        args = args.splice(1);
        switch(cmd) {
            case 'porno':
                bot.sendMessage({
                    to: "686989112909103154",
                    message: msg
                });
            	break;
            // Just add any case commands if you want to..
         }
     }
});