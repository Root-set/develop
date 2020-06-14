const { MessageEmbed } = require('discord.js')

module.exports = (bot, msg) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .setTitle('도움말')
      .setDescription('Dawn의 도움말을 불러왔습니다.')
      .addField('h!도움말','봇의 명령어를 확인할 수 있습니다.')
      .addField('h!핑','봇의 핑을 확인할 수 있습니다.')
      .addField('h!네코','네코 히히힇.')
      .addField('h!정보','자신의 정보을 확인합니다.')
      .addField('h!날짜', '오늘의 날짜를 알려줍니다.')
      .addField('h!봇정보','봇에 대한 정보를 불러옵니다.')
      .addField('h!서버정보','서버에 대한 정보를 불러옵니다.')
      .addField('h!프사', '자신의 프로필 사진을 불러옵니다.')
      .addField('h!업타임','봇의 업타임을 보여줍니다.')
      .setColor(Math.floor(Math.random() * 0xffffff))
      .setFooter('이용해주셔서 감사합니다.')
  )
}
module.exports.info = { name: '도움말' }