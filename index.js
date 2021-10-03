const Discord = require('discord.js');
const client = new Discord.Client({
    intents: 32767
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.interactions = new Discord.Collection();

["command_handler", "event_handler", "interation_handler"].forEach((handler) => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login('ODkyMTg0NTg2MjkxOTM3Mzgx.YVJNpQ.cLPHe1xLmuixIXw-lqq8uBBpBaQ')