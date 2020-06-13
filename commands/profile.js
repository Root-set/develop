const { MessageEmbed } = require('discord.js')

module.exports = (bot, msg) => {
  const { channel } = msg


  let roles = ''
    msg.member.roles.cache.forEach((r) => {
    roles += '<@&' + r.id + '> '
  })

  channel.send(


    new MessageEmbed()
      .setTitle('내정보')
      .setDescription('자신의 정보를 불러왔습니다.')//프로필 기능 : 닉네임 , 자신 프사 , 아이디 , 디스코드 계정 생성일 
      .setColor(Math.floor(Math.random() * 0xffffff))
      .addField('Nick', msg.author.nickname, true)
      .addField('ID', msg.author.id,true)
      .addField('Role', roles)
      .addField('CreatedAt',msg.author.createdAt,true)
      .addField('Last Message',msg.channel.lastMessage,true)
      .setThumbnail(msg.author.displayAvatarURL())
      .setFooter("제작자-𝓠𝔂𝓪.𝓟𝓔#5124,PMH")
  
  )
}
module.exports.info = { name: '정보' }