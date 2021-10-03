module.exports = {
    name: 'close',
    async execute(Discord, client, interaction) {
        console.log(interaction.member.user.id)
        if (interaction.member.user.id == '413624855510908929' || interaction.member.user.id == interaction.channel.topic) {
            interaction.reply('Locking channel')
            interaction.channel.permissionOverwrites.edit(interaction.channel.topic, {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false
            })
        } else {
            return interaction.reply('You cannot use this button');
        }
    }
}