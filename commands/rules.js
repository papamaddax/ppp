module.exports = {
    name: 'rules',
    async execute(client, message, args, Discord) {

        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('rules')
                    .setStyle('SUCCESS')
                .setLabel("I accept")
            );
        const ticketEmbed = new Discord.MessageEmbed()
            .setTitle('Papas Premium Programming Rules')
            .setDescription(`
           1. Be respectful to everyone
           2. Follow Discord TOS
           3. Do not spam others
           4. All purchases are final `)
            .setColor("RANDOM")
            .setThumbnail('https://media.discordapp.net/attachments/735521586295078944/892517831944577024/ppp.png')
        message.channel.send({
            embeds: [ticketEmbed],
            components: [row]
        })
    }
}