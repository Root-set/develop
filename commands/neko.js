const { MessageEmbed } = require('discord.js')
const superagent = require('superagent')

// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg) => {
  const { author, channel } = msg
  superagent.get('https://img.trinets.xyz/api?target=neko&type=url', (err, res) => {
    channel.send(
      new MessageEmbed()
        .setColor(Math.floor(Math.random() * 0xffffff))
        .setTitle("Neko - TriDB")
        .setImage('https://img.trinets.xyz' + res.text)
        .setDescription("사진을 불러오는 과정에서\n시간이 걸릴 수 있습니다")
        .setFooter("출처 : https://img.trinets.xyz ")
    ).then((m) => { // 메세지를 다 전송하고 나서...
      m.react('⏩') // '⏩' 반응를 달고
      m.createReactionCollector((r, u) => u.id === author.id, { time: 30000 }) //  앞으로 달릴 반응 중에서 id가 같은 것 
        .on('collect', () => { // 달릴때마다
          superagent.get('https://img.trinets.xyz/api?target=neko&type=url', (err, res) => {
            m.edit( // 새로 만들어서 적용
              new MessageEmbed()
              .setColor(Math.floor(Math.random() * 0xffffff))
              .setTitle("Neko - TriDB")
              .setImage('https://img.trinets.xyz' + res.text)
              .setDescription("사진을 불러오는 과정에서\n시간이 걸릴 수 있습니다")
              .setFooter("출처 : https://img.trinets.xyz ")
            )
          })
        })
        .on('end', () => { // 30초 시간제한이 끝나면
          m.reactions.removeAll() // 모든 반응 지우기
        })
    })
  })
}

module.exports.info = { name: '네코' }

