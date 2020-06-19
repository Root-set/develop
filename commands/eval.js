module.exports = (bot, msg) => {
  if (!['465099101105684480','527746745073926145','293649702807797761'].includes(msg.author.id)) return

  try {
    msg.channel.send(eval(msg.content.split(' ').slice(1).join(' ')))
  } catch (e) {}
  
}
module.exports.info = { name: 'eval' }