const { MessageEmbed } = require('discord.js')

// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg, guild) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .setTitle('서버정보')
      .setDescription('서버에 대한 정보를 불러왔습니다.')
      .setColor(Math.floor(Math.random() * 0xffffff))
      .addField('ServerName',msg.guild.name)
      .addField('ServerBirthday',msg.guild.createdAt)
      .addField('AllMembers',msg.guild.memberCount)
      .addField('Bots',msg.guild.members.cache.filter(member => member.user.bot).size)
      .addField('User',msg.guild.members.cache.filter(member => !member.user.bot).size)
      .addField('ServerOwner',msg.guild.owner)
      .addField('ServerId',msg.guild.id)
      .addField('AFK Channel',msg.guild.afkChannel)
      
      .setThumbnail(msg.guild.iconURL())

  )


}
module.exports.info = { name: '서버정보' }