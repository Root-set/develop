const { MessageEmbed } = require('discord.js')

// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .setColor(Math.floor(Math.random() * 0xffffff))
      .setTitle("오늘의 날짜"+new Date().toString()+"입니다.")
      .setThumbnail('https://previews.123rf.com/images/studiobarcelona/studiobarcelona1605/studiobarcelona160500027/56782996-%ED%83%9C%EC%96%91-%EC%95%84%EC%9D%B4%EC%BD%98-.jpg')

  )


}
module.exports.info = { name: '날짜' }
