const fs = require('fs')

module.exports = (client, Discord) =>{
    const { Collection } = require("discord.js");
client.commands = new Collection();

const commandFiles = fs.readdirSync(`./commands`).filter(File => File.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`../commands/${file}`);

    client.commands.set(command.name, command);
        }
    
}