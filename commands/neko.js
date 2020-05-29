const { MessageEmbed } = require('discord.js')

// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .setColor(Math.floor(Math.random() * 0xffffff))
      .setImage('https://neko-love.xyz/api/v1/neko')

  )


}

// 이 명령어의 이름은 ''
module.exports.info = { name: '네코' }

