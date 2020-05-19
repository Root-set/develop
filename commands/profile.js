const { MessageEmbed } = require('discord.js')

module.exports = (bot, msg) => {
  const { channel } = msg


  let roles = ''
    msg.member.roles.cache.forEach((r) => {
    roles += '<@&' + r.id + '> '
  })

  channel.send(


    new MessageEmbed()//프로필 기능 : 닉네임 , 자신 프사 , 아이디 , 디스코드 계정 생성일 
      .setColor(Math.floor(Math.random() * 0xffffff))
      .addField('닉네임', msg.author.username, true)
      .addField('아이디', msg.author.id,true)
      .addField('역할', roles)
      .setThumbnail(msg.author.displayAvatarURL())
  
  )
}
module.exports.info = { name: '프로필' }