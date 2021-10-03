module.exports = {
    name: 'ticketcreate',
    async execute(Discord, client, interaction) {
        console.log(interaction.values[0])
        const channel = await interaction.guild.channels.create(`${interaction.member.displayName}\'s ticket`, {

            permissionOverwrites: [{
                id: interaction.member.user.id,
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES"],
            },
        {
            id: interaction.guild.id,
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES"],
                },],
            parent: '892511182131441674',
            topic: `${interaction.member.user.id}`
        }
        )
        const deleteEmbed = new Discord.MessageEmbed()
            .setTitle("Thank you for your purchase inquiry")
            .setDescription(`Papa Maddax should be with you soon. This ticket type is **${interaction.values[0]}**`)
            .setColor("RANDOM")
            .setTimestamp()
            .setThumbnail('https://media.discordapp.net/attachments/735521586295078944/892517831944577024/ppp.png')
        const row2 = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('close')
                    .setLabel('Close Ticket')
                    .setStyle("SUCCESS")
                    .setEmoji('892560908692369418'),
                new Discord.MessageButton()
                    .setCustomId('delete')
                    .setLabel('Delete Ticket')
                    .setStyle("DANGER")
                .setEmoji('892561172996440135')
                
        )
        channel.send({
            content: '<@413624855510908929>',
            components: [row2],
            embeds: [deleteEmbed]
        })

        const replyEmbed = new Discord.MessageEmbed()
        .setTitle('Ticket Created')
            .setDescription(`Your ticket have been created. Head over to ${channel} for more information`)
            .setColor("RANDOM")
            .setThumbnail('https://media.discordapp.net/attachments/735521586295078944/892517831944577024/ppp.png')
            .setTimestamp()
        
        interaction.reply({
            embeds: [replyEmbed],
            ephemeral: true
        })























        //refesh interaction
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
        
        const messgae = interaction.channel.messages.cache.get('892517904740917248')

        messgae.edit({
            embeds: [ticketEmbed],
            components: [row]
        })
}
}