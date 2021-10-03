module.exports = async (Discord, client, interaction) => {
    const inter = interaction.isButton() || interaction.isSelectMenu() ? interaction.customId : interaction.commandName;
    const interact = client.interactions.get(inter);
    if (interact) {
        interact.execute(Discord, client, interaction);
    }
    //console.log(interaction)

}
