const { MessageEmbed } = require('discord.js')

module.exports = (bot, msg) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .addField('h!도움말','봇의 명령어를 확인할수있습니다.')
      .addField('h!핑','봇의핑을 확인할수있습니다.')
      .addField('h!네코','neko사진이나옵니다.')
      .addField('h!정보','자신의 정보을 확인합니다.')
      .addField('h!날짜', '오늘의 날짜를 알려줍니다.')
      .addField('h!봇정보','봇에 대한 정보를 불러옵니다.')
      .setColor(Math.floor(Math.random() * 0xffffff))
  )
}
module.exports.info = { name: '도움말' }