const { MessageEmbed } = require('discord.js')

// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .setColor(Math.floor(Math.random() * 0xffffff))
      .addField('생일','2020-5-17일에 생성된 봇입니다')
      .addField('닉네임','Dawn')
      .addField('제작자','Qya,PMH')
      .addField('명령어','h!도움말확인')
      .addField('문의','𝓠𝔂𝓪.𝓟𝓔#0001')
      .setThumbnail('https://cdn.discordapp.com/attachments/713393225632710708/714117219411296256/2.jpg')
      .addField('등록된 서버',bot.guilds.cache.size,true)
      .addField('업타임',msg.author.uptime)
      .setFooter("제작자-𝓠𝔂𝓪.𝓟𝓔#5124,PMH")
  )


}
module.exports.info = { name: '봇정보' }
