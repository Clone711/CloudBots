var Discord = require('discord.io');
var auth = require('./auth.json');
// Configure logger settings
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    console.log("sono pronto");
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
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