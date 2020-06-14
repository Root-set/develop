const { MessageEmbed } = require('discord.js')

// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg) => {
  const { channel } = msg
  const target = msg.mentions.members.first() || msg.member


  channel.send(

    new MessageEmbed()
      .setColor(Math.floor(Math.random() * 0xffffff))
      .setDescription(
        !msg.mentions.members.first() ? '자신의 프로필를 불러왔습니다.' :
        (msg.mentions.members.first().nickname || target.user.username) + '님의 프로필를 불러왔습니다.')
      .setTitle((target.nickname || target.user.username) + '님의 프로필입니다.')
      .setImage(target.user.displayAvatarURL({ format : 'png', dynamic: true, size: 1024})) // 엥 된거아닌감?
      .setFooter("제작자-𝓠𝔂𝓪.𝓟𝓔#5124,PMH")
  )


}
module.exports.info = { name: '프사' }
