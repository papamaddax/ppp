module.exports = {
    name: 'verify',
    async execute(Discord, client, interaction) {
        try {
            //captcha generator
            const {
                CaptchaGenerator
            } = require('captcha-canvas');
            let captcha = new CaptchaGenerator({
                height: 200,
                width: 600
            });
            const buffer = await captcha.generate()
            const verificationChannel = interaction.member.user
            const captchaImage = new Discord.MessageAttachment(buffer, "captcha.png")
            const captchaEmbed = new Discord.MessageEmbed()
                .setTitle("Sever Verification")
                .setDescription("Please finish the captcha below \n If you fail you finish you may use the -verify command to retry")
                .setImage(`attachment://captcha.png`)
                .setColor("RANDOM")
                .setTimestamp()
            embed = await verificationChannel.send({
                content: `${interaction.member}`,
                embeds: [captchaEmbed],
                files: [captchaImage]

            });
            client.on("messageCreate", message => {
                if (message.channel.type !== "DM") return;
                if (message.author.bot) return;
                if (message.content == captcha.text && message.author.id == interaction.member.user.id) {
                    message.reply("Your server verification has been completed")
                    client.guilds.cache.get('892177061362417685').members.cache.get(interaction.member.user.id).roles.add('892195778041360444')
                }
                if (message.content !== captcha.text && message.author.id == interaction.member.user.id) {
                    return message.reply({ content: "Your server verification has failed", ephemeral: true})
                }
            })
            
        } catch (err) {
            interaction.reply('I was unable to send you a DM')
            console.log(err)
        }
    }
}