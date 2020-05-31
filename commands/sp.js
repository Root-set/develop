const { MessageEmbed } = require('discord.js')

// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .addField('서버생성일',msg.guild.createdat,true)

  )


}
module.exports.info = { name: '서버정보' }