module.exports = {
    name: 'rules',
    async execute(Discord, client, interaction) {
        interaction.member.roles.add('892511652161925210')
        interaction.reply({
            content: 'You have agreed to the rules, welcome to the server',
            ephemeral: true
        })
    }
}