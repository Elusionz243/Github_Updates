const Discord = require('discord.js');
const config = require('../config.json');

const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => 
  console.log(`Logged in as ${client.user.tag}!`);

client.on('message', message => {
  if(message.author.bot || !message.content.startsWith(prefix)) return;
  
});

client.login(config.BOT_TOKEN);
console.log('GitHub Bot Logged In!');
