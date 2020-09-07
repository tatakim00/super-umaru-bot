const Discord = require('discord.js')
const bot = new Discord.Client();

const token = 'NzUyNTAzMzU2MjM2NDk2OTU2.X1YlXA.ieu0K5TEKwCLTKqoaoWscAWtm9c';

bot.on('ready', () =>{
    console.log('Im here Daddy!')
});

bot.login(process.env.BOT_TOKEN);
