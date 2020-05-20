//메세지 청소기능
module.exports = (bot, msg) => {
  const args = msg.content.split(' ')

  msg.channel.bulkDelete(args[1], true)

}
module.exports.info = { name: '청소' }