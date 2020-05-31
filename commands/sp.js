const { MessageEmbed } = require('discord.js')

// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg, guild) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .setTitle('서버정보')
      .setDescription('서버에 대한 정보를 불러왔습니다.')
      .setColor(Math.floor(Math.random() * 0xffffff))
      .addField('ServerName',msg.guild.name,true)
      .addField('ServerBirthday',msg.guild.createdAt,true)
      .addField('Member',msg.guild.memberCount,true)
      .addField('ServerOwner',msg.guild.owner, true)
      .addField('ServerId',msg.guild.id,true)
      .addField('AFK Channel',msg.guild.afkChannel,true)
      .setThumbnail(msg.guild.iconURL())

  )


}
module.exports.info = { name: '서버정보' }