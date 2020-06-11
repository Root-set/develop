const { MessageEmbed } = require('discord.js')

// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .setColor(Math.floor(Math.random() * 0xffffff))
      .addField("업타임0",Math.round(bot.uptime/1000)+"초입니다.")
      .setFooter("제작자-𝓠𝔂𝓪.𝓟𝓔#5124,PMH")
  )


}
module.exports.info = { name: '업타임' }
