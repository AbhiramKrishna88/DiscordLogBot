require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.on('ready', ()=>{
	console.log(bot.user.tag+" is online");
});

bot.on('message', function(message) {
    if(message.author.id != bot.user.id) {
        if (message.channel.type == 'text')
            console.log("Author: "+ message.author.username +"#"+  message.author.discriminator +"______"+ message.content);
    }
});


bot.login(TOKEN);