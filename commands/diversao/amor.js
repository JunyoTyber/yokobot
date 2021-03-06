const { RichEmbed } = require('discord.js');
const { getMember } = require('../../functions.js');

module.exports = {
    name: "amor",
    aliases: ["love"],
    category: "diversao",
    description: "Calculadora do amor ❤",
    example: "-amor @YokoBot",
    run: async(bot, message, args) => {

        let person = getMember(message, args[0]);

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        if (!person) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();

            const loveEmbed = new RichEmbed()
                .setColor("PINK")
                .addField(`☁  Quanto **${person.displayName}** ama **${message.member.displayName}**...`,
                    `💟 ${Math.floor(love)}%\n\n${loveLevel}}`)
                .setThumbnail(person.user.displayAvatarURL)

            message.channel.send(loveEmbed);

        } else if (message.author.id === person.id) {

            const loveEmbed = new RichEmbed()
                .setColor("PINK")
                .addField(`☁  Quanto **${person.displayName}** se ama...`,
                    `💟 ${Math.floor(love)}%\n\n${loveLevel}}`)
                .setThumbnail(person.user.displayAvatarURL)

            message.channel.send(loveEmbed);
        } else {
            const loveEmbed = new RichEmbed()
                .setColor("PINK")
                .addField(`☁  Quanto **${person.displayName}** ama **${message.member.displayName}**...`,
                    `💟 ${Math.floor(love)}%\n\n${loveLevel}}`)
                .setThumbnail(person.user.displayAvatarURL)

            message.channel.send(loveEmbed);
        }
    }
}