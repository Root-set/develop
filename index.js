// 모듈 불러오기
const Discord = require('discord.js')
const beautify = require('beautify');

// 클라이언트(봇) 새로 만들기
const bot = new Discord.Client()

// 토큰을 환경변수로 정하기 ("set Token=(토큰)" 으로 설정 가능)
const token = process.env.Token

// 명령어 파일들 읽어오기 {

// 파일을 읽거나 쓸수 있는 fs라는 모듈을 불러오기 (filesystem의 줄임말)
const fs = require('fs')

const activity = ['h!도움말을통해 명령어 확인','문의: 𝓠𝔂𝓪.𝓟𝓔#0001','개발중이다냥~']

// 명령어들을 모아둘 배열
const commands = []

// commands 폴더의 내용물을 읽어오기
fs.readdir('./commands/', (err, files) => {
  // 만약 읽다가 에러가 나면 에러를 출력하기
  if (err) console.log(err)

  // 각 파일마다...
  files.forEach((file) => {
    // 파일이름에서 .js를 뺀다 (파일 이름에서 .js를 빼면 그게 모듈 이름임)
    file = file.replace('.js', '')

    // 파일을 읽어오기
    commands.push(require('./commands/' + file))

    // 출력
    console.log(file + ' 명령어가 준비되었어요!')
  })
})

// }

// 토큰으로 봇 로그인
bot.login(token)

// 봇이 준비 되었을때...
bot.on('ready', () => {
  bot.guilds.cache.forEach((g) => { console.log(g.name) })
  setInterval(() => {
    bot.user.setActivity(activity[Math.floor(Math.random() * activity.length)],{ type: 'PLAYING' })
   }, 10000)
  // 출력
  console.log(bot.user.username + '이 준비되었어요!')
})

// 봇이 메세지를 받았을때...
bot.on('message', (msg) => {

  // 받은 메세지에서 작성자, 내용, 채널을 빼오기
  const { author, content, channel } = msg

  // 만약 작성자가 봇이면, 무시하기
  if (author.bot) return

  // 만약 내용이 'h!'로 시작하지 않으면, 무시하기
  if (!content.startsWith('h!')) return

  // 내용을 'h!'을 기준으로 나누기
  // 예시로 'h!핑' 이라고 치면 ''와 '핑'으로 나눠짐
  const splited = content.split('h!')

  // 나눠진 것중 두번째꺼를 가져오기
  // 예시로 'h!핑'중 '핑'부분
  const cmd = splited[1].split(' ')[0]

  // 아까전 불러온 명령어들 중에 명령어 이름이 두번째거인 것을 가져오기
  // 예시로 'h!핑'을 치면 '핑'이라는 이름을 가진 명령어를 가져오기
  const target = commands.find((c) => c.info.name === cmd)

  // 위에서 가져온 명령어를 봇과 메세지 정보를 주고 실행하기
  if (target) target(bot, msg)
  
})