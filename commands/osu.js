const Discord = require('discord.js')
const { Client, MessageEmbed } = require('discord.js');
const osu = require('node-osu');
const api = new osu.Api("c8b6732d635c4b7f16ffdf1f7093c61a7cbb0457" , {
    notFoundAsError: true,
    completeScores: false
})
 
module.exports.run = async (bot, message, args) => {
 
 
  let username = args[0]
 
 
  if (!args[0]) return message.channel.send('Введите имя пользователя (osu!). Если в нике пробелы, то пропишите ник таким образом: nathan_on_osu')
 
api.getUser({u: username}).then(user => {
  const embed = new MessageEmbed()
.setTitle('osu! std profile')
  .setDescription(`Данные об аккаунте:`)
  .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
  .setColor("#D0436A")
  .addField('Name:', user.name, true)
  .addField('PP:', Math.round(user.pp.raw), true)
  .addField('Rank:', user.pp.rank, true)
  .addField('Level:', Math.round(user.level), true)
  .addField('Country:', user.country, true)
  .addField('Country Rank:', user.pp.countryRank, true)
  .addField('Playcount:', user.counts.plays, true)
  .addField('Accuracy:', `${user.accuracyFormatted}`, true)
  .setFooter('Реквест сделан: ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed);
 
})
 
}
 
module.exports.help = {
  name: "osu"
}
