module.exports = async (Discord, client, member) => {
    //captcha generator
    const {
        CaptchaGenerator
    } = require('captcha-canvas');
    let captcha = new CaptchaGenerator({
        height: 200,
        width: 600
    });
    const buffer = await captcha.generate()
    const verificationChannel = member.guild.channels.cache.get('892184498979102730');
    const captchaImage = new Discord.MessageAttachment(buffer, "captcha.png")
    const captchaEmbed = new Discord.MessageEmbed()
        .setTitle("Sever Verification")
        .setDescription("You have 15 seconds to finish the captcha below \n If you fail you finish you may use the -verify command to retry")
        .setImage(`attachment://captcha.png`)
        .setColor("RANDOM")
        .setTimestamp()
   embed = await verificationChannel.send({
        content: `${member}`,
        embeds: [captchaEmbed],
        files: [captchaImage]

    });

    //filter
    const filter = m => m.content.includes(captcha.text) && m.author.id == member.user.id;

    const collector = verificationChannel.createMessageCollector({
        filter,
        time: 15000,
        max: 1
    });


    collector.on('collect', message => {
        message.reply("Your server verification has been completed")
        message.member.roles.add('892195778041360444')
    });


    collector.on('end', collected => {
        if (collected.size == 0) {
            embed.reply("Your server verification has failed, please try again later")
        }
    });
}