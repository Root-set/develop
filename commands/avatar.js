const { MessageEmbed } = require('discord.js')

// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .setColor(Math.floor(Math.random() * 0xffffff))
      .setTitle("프로필사진")
      .setImage(msg.author.displayAvatarURL())
      .setFooter("제작자-𝓠𝔂𝓪.𝓟𝓔#5124,PMH")
  )


}
module.exports.info = { name: '프사' }