module.exports = {
    name: 'verify',
    async execute(client, message, args, Discord) {
        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                .setCustomId('verify')
                .setStyle('SUCCESS')
                .setLabel("Verify")
            );
        const ticketEmbed = new Discord.MessageEmbed()
            .setTitle('Verify')
            .setDescription("To start your server verification, please click the button below")
            .setColor("RANDOM")
            .setThumbnail('https://media.discordapp.net/attachments/735521586295078944/892517831944577024/ppp.png')
        message.channel.send({
            embeds: [ticketEmbed],
            components: [row]
        })
    }
}