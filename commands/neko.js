const { MessageEmbed } = require('discord.js')
const superagent = require('superagent')

// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg) => {
  const { channel } = msg
  superagent.get('https://img.trinets.xyz/api?target=neko&type=url', (err, res) => {
    channel.send(
      new MessageEmbed()
        .setColor(Math.floor(Math.random() * 0xffffff))
        .setTitle("Neko")
        .setImage('https://img.trinets.xyz' + res.text)
        .setDescription("사진을 불러오는과정에서\n시간이 걸릴수있습니다")
        
    )
  })
}

module.exports.info = { name: '네코' }

