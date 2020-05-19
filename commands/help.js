const { MessageEmbed } = require('discord.js')

module.exports = (bot, msg) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .setColor(Math.floor(Math.random() * 0xffffff))
      .setTitle("h!핑")
      .setDescription("봇의핑을 알수가있습니다.")
      .setTitle("h!네코")
      .setDescription("neko사진이나옵니다 (nsfw x)")

  )
}
module.exports.info = { name: '도움말' }