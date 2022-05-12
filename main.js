const Discord = require('discord.js-v12');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});


client.login('OTcxMjY2NDgyMzc1ODg0ODEw.GHDC3X.x4tiC2UV1Pkc3lveJVuhKsBbAMGmBHl41-yGzU');