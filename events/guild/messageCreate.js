module.exports = async (Discord, client, message) => {

    const prefix = '-'
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix)) return;
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) {
        if (command.permissions) {
            const authorPerms = message.channel.permissionsFor(message.author);
            if (!authorPerms || !authorPerms.has(command.permissions)) {
                const noPermsEmbed = new Discord.MessageEmbed()
                    .setTitle('Missing Permissions')
                    .setDescription('You are missing one or more of the following permissions required to use this command')
                    .addField('Permissions Required', `\`${command.permissions.splice(0).join("` `")}\``)
                    .addField('Current Permissions', `\`${message.channel.permissionsFor(message.author).toArray().splice(0).join("` `")}\``)
                    .setColor("RANDOM")
                    .setTimestamp()
                    .setFooter('Made By: papa maddax#8054 | 413624855510908929')
                return message.lineReply(noPermsEmbed);
            }
        }
        command.execute(client, message, args, Discord);
    }



}