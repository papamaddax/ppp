module.exports = {
    name: 'ticket',
    async execute(client, message, args, Discord) {

        const row = new Discord.MessageActionRow()
            .addComponents(
                     new Discord.MessageSelectMenu()
                    .setCustomId('ticketcreate')
                    .setPlaceholder('Select a ticket type below')
                    .setMinValues(0)
                        .setMaxValues(1)
                    .addOptions([{
                            label: 'Discord Bot',
                            description: 'Create a ticket to purchase a Discord bot', 
                            value: 'discord',
                        },
                        {
                            label: 'Other Programming (Java, JavaScript, Lua, FiveM, Roblox)',
                            description: 'Open a ticket to purchase a program other than a Discord bot',
                            value: 'other',
                        },
                    ]),
        );
        const ticketEmbed = new Discord.MessageEmbed()
            .setTitle('Create a ticket')
            .setDescription('To make a purchase create a ticket with one of the options below')
            .setColor("RANDOM")
            .setThumbnail('https://media.discordapp.net/attachments/735521586295078944/892517831944577024/ppp.png')
        message.channel.send({
            embeds: [ticketEmbed],
            components: [row]
        })
    }
}