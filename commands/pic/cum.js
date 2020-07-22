const Discord = require('discord.js');
const { get } = require("snekfetch");
const client = require('nekos.life');
const neko = new client();


module.exports.run = async (bot, message, args, ops, async, run) => {
    if (!message.channel.nsfw) return message.reply("🔞 Это не NSFW канал, чтобы использовать такие команды.");

    const msg = await message.channel.send(`:thinking: **${message.member.displayName}** Ищет себе лольку...`);
    const { body } = await get("https://nekos.life/api/v2/img/cum");
    await msg.edit({
      embed: {
        "title": "Тыкни сюда, если не прогрузилась пикча.",
        "url": body.url,
        "color": 6192321,
        "image": {
        "url": body.url
        },
  }
    })
};
module.exports.help = {
    name: "cum"
}
