const Discord = require('discord.js')
const bot = new Discord.Client();


client.on('ready', () =>{
    console.log('Im here Daddy!')
});

client.login(process.env.BOT_TOKEN);
