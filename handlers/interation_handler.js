const fs = require('fs')
module.exports = (client, Discord) => {
    const {
        Collection
    } = require("discord.js");
    client.interactions = new Collection();
        const interactionFiles = fs.readdirSync(`./interactions/`).filter(File => File.endsWith('.js'));
        for (const file of interactionFiles) {
            const interact = require(`../interactions/${file}`);
            client.interactions.set(interact.name, interact);
        }
}