const { RichEmbed } = require('discord.js');
const { promptMessage } = require("../../functions.js");

const chooseArr = ["🗻", "🧻", "✂"]

const playAgain = ["🔁"]

module.exports = {
    name: "ppt",
    aliases: ["rps"],
    category: "diversao",
    description: "Pedra, papel ou tesoura!!!",
    example: "",
    run: async(bot, message, args) => {
        const pptEmbed = new RichEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
            .setDescription("Escolha um emoji para jogar!")
            .setTimestamp();

            const m = await message.channel.send(pptEmbed);
            const reacted = await promptMessage(m, message.author, 30, chooseArr);
            const replay = await promptMessage(m, message.author, 30, playAgain);

            const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

            const result = await getResult(reacted, botChoice);
            await m.clearReactions();

            pptEmbed
                .setDescription("")
                .addField(result, `${reacted} vs ${botChoice}`);

            m.edit(pptEmbed);

            function getResult(me, clientChosen){
                if ((me === "🗻" && clientChosen === "✂") ||
                    (me === "🧻" && clientChosen === "🗻") ||
                    (me === "✂" && clientChosen === "🧻")){
                        return 'Você ganhou! ||eu deixei...||'
                        replay
                    }else if (me === clientChosen){
                        return "Empatamos! Assim todos ganham 😁"
                    }else{
                        return "Eu ganhei dessa vez xD"
                    }
            }

            message.react(playAgain)
            const reaction = collected.first();
            if (reaction.emoji.name === playAgain)
                message.channel.send(pptEmbed);

    }}
