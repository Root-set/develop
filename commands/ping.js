// 봇과 메세지 정보를 받고 이 명령어가 실행되었을때...
module.exports = (bot, msg) => {
  msg.channel.send('퐁! `' + bot.ws.ping + 'ms`')
}
module.exports.info = { name: '핑' }