
module.exports = {
    name: 'delete',
    async execute(Discord, client, interaction) {
        console.log(interaction.member.user.id)
        if (interaction.member.user.id == '413624855510908929' || interaction.member.user.id == interaction.channel.topic) {
            interaction.reply('deleting channel')
            interaction.channel.delete()
        } else {
             return interaction.reply('You cannot use this button');
        }
    }
}