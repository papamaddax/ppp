module.exports = {
    name: 'verify',
    async execute(client, message, args, Discord) {
        client.emit('guildMemberAdd', message.member);

    }
}