

// Selamat datang di source code Victoria Rosalind
// Terima kasih sudah mengunakan SC ini
// Terima kasih juga sudh mampir ke sc ku semoga kalian dpt inovasi baru (Untuk para sepuh).
// Jangan lupa subscribe Channel Clayza Aubert karna sc ini bakal saya update terus, dengan fitur yang gk pasaran.
// Mohon bantuanya semuanya... karna saya masih pemula.

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Malaysia').format('HH')
let wibm = moment.tz('Asia/Malaysia').format('mm')
let wibs = moment.tz('Asia/Malaysia').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`

let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/// Setting Dari Sini
global.owner = [
  ['60164669813', 'iwandino', true],
]
global.mods = []
global.prems = []
global.nomorbot = '60138849813'
global.nomorown = '60164669813'
global.nomorown1 = '60164669813'
global.nomorown2 = '60164669813'
global.nomorwa = '60164669813'
global.readMore = readMore
global.author = 'iwan | iwandino | kimeikato'
global.namebot = 'miyu'
global.watermark = wm
global.wm2 = '©miyu by iwandino'
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.bottime = `Time: ${wktuwib}`
global.titlebot = `miyu`
global.stickpack = '​©miyu'
global.stickauth = `By iwandino`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
global.nameown1 = 'iwandino' // Optional
global.nameown2 = 'iwandino' // Optional
global.thumb = 'https://i.postimg.cc/WbtRbPNN/Victoria-V3-min.jpg' // gambar di menu
global.leave = 'https://i.postimg.cc/yxvn10Ls/ssstik-io-1689170610318.jpg' /// Untuk BG leave

//Link Social Media Ganti Aja Kalau Ga Punya Biarin Aja
global.myweb = 'https://clayzaaubert.my.id' //website
global.sig = 'https://www.instagram.com/iwandino' //instagram
global.sgh = 'https://github.com/iwandino' //github
global.sgc = 'https://chat.whatsapp.com/' //group whatsapp
global.sdc = '-' //discord
global.snh = 'https://www.youtube.com/c/kimeikato' //youtube

//Donasi/Payment
global.bankin = '11117300127871' // bankin
global.spina = 'pm: 0164669813' // spina
global.tngduitnow = '181695932615' // tng duit now

/// Api keys
global.clayza = '' // https://api.clayzaaubert.my.id

/// TEXT
global.stiker_wait = '_Sedang Di Proses, Mohon Tunggu_.....'
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Eror, Mohon Coba Lagi Nanti'
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.multiplier = 69

/// flaaa
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

// The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
