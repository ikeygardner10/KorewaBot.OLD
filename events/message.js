const alen = require('../commands/alen')
const avatar = require('../commands/avatar')
const baby = require('../commands/baby')
const ban = require('../commands/ban')
const bruj = require('../commands/bruj')
const cbt = require('../commands/cbt')
const crazi77 = require('../commands/crazi77')
const crazimo = require('../commands/crazimo')
const cuddle = require('../commands/cuddle')
const cursed = require('../commands/cursed')
const cutie = require('../commands/cutie')
const decypher = require('../commands/decypher')
const eden = require('../commands/eden')
const feet = require('../commands/feet')
const fuck = require ('../commands/fuck')
const gay = require('../commands/gay')
const gm = require('../commands/gm')
const gn = require('../commands/gn')
const googleimage = require('../commands/googleimage')
const handhold = require('../commands/handhold')
const hansen = require('../commands/hansen')
const hello = require('../commands/hello')
const help = require('../commands/help')
const hug = require('../commands/hug')
const ikey = require('../commands/ikey')
const info = require('../commands/info')
const invite = require('../commands/invite')
const jariel = require('../commands/jariel')
const jontron = require('../commands/jontron')
const juckshuk = require('../commands/juckshuk')
const kaji = require('../commands/kaji')
const kick = require('../commands/kick')
const kiss = require('../commands/kiss')
const konata = require('../commands/konata')
const krisku = require('../commands/krisku')
const kyonko = require('../commands/kyonko')
const lewd = require('../commands/lewd')
const list = require('../commands/list')
const mackie = require('../commands/mackie')
const maho = require('../commands/maho')
const mashrep = require('../commands/mashrep')
const megaflamerp = require('../commands/megaflamerp')
const meme = require('../commands/meme')
const memri = require('../commands/memri')
const monkey = require('../commands/monkey')
const naenae = require('../commands/naenae')
const nword = require('../commands/nword')
const paradise = require('../commands/paradise')
const pet = require('../commands/pet')
const poopies = require('../commands/poopies')
const punch = require('../commands/punch')
const purge = require('../commands/purge')
const pururin = require('../commands/pururin')
const raid = require('../commands/raid')
const rape = require('../commands/rape')
const razor = require('../commands/razor')
const roles = require('../commands/roles')
const run = require('../commands/run')
const sair = require('../commands/sair')
const server = require('../commands/server')
const shoot = require('../commands/shoot')
const slap = require('../commands/slap')
const sleepy = require('../commands/sleepy')
const smug = require('../commands/smug')
const snorcz = require('../commands/snorcz')
const spank = require('../commands/spank')
const stab = require('../commands/stab')
const tights = require('../commands/tights')
const tubby = require('../commands/tubby')
const secretmemenoedenallowed = require('../commands/secretmemenoedenallowed')
const vanessa = require('../commands/vanessa')
const vore = require('../commands/vore')
const waifu = require('../commands/waifu')
const welcome = require('../commands/welcome/welcome')
const yes = require('../commands/yes')

module.exports = (client, message) => {
//	if (message.content.includes('nigger')) {
//		return nword(message)
//	}
//	if (message.content.includes('nigga')) {
//		return nword(message)
//	}
//	if (message.content.includes('Nigger')) {
//		return nword(message)
//	}
//	if (message.content.includes('Nigga')) {
//		return nword(message)
//	}
	if (message.content.startsWith('$vanessa')) {
		return vanessa(message)
	}
	if (message.content.startsWith('$alen')) {
		return alen(message)
	}
	if (message.content.startsWith('$av')) {
		return avatar(message)
	}
	if (message.content.startsWith('$baby')) {
		return baby(message)
	}
	if (message.content.includes('$ban')) {
		return ban(message)
	}
	if (message.content.startsWith('$bruj')) {
		return bruj(message)
	}
	if (message.content.startsWith('$cbt')) {
		return cbt(message)
	}
	if (message.content.startsWith('$crazimo')) {
		return crazimo(message)
	}
	if (message.content.startsWith('$crazi')) {
		return crazi77(message)
	}
	if (message.content.startsWith('$cuddle')) {
		return message.reply(`coming soon!`)
	}
	if (message.content.startsWith('$cursed')) {
		return cursed(message)
	}
	if (message.content.startsWith('$cutie')) {
		return cutie(message)
	}
	if (message.content.startsWith('$decypher')) {
		return decypher(message)
	}
	if (message.content.startsWith('$eden')) {
		return eden(message)
	}
	if (message.content.includes('$feet')) {
		return feet(message)
	}
	if (message.content.startsWith('$fuck')) {
		return message.reply('coming soon!')
	}
	if (message.content.startsWith('$gay')) {
		return gay(message)
	}
	if (message.content.startsWith('$gm')) {
		return gm(message)
	}
	if (message.content.startsWith('$gn')) {
		return gn(message)
	}
	if (message.content.startsWith('$img')) {
		return googleimage(message)
	}
	if (message.content.startsWith('$hh')) {
		return handhold(message)
	}
	if (message.content.startsWith('$hansen')) {
		return hansen(message)
	}
	if (message.content.startsWith('$hello')) {
		return hello(message)
	}
	if (message.content.startsWith('$help')) {
		return help(message)
	}
	if (message.content.startsWith('$hug')) {
		return hug(message)
	}
	if (message.content.startsWith('$ikey')) {
		return ikey(message)
	}
	if (message.content.startsWith('$info')) {
		return info(message)
	}
	if (message.content.startsWith('$invite')) {
		return invite(message)
	}
	if (message.content.startsWith('$jariel')) {
		return jariel(message)
	}
	if (message.content.startsWith('$jontron')) {
		return jontron(message)
	}
	if (message.content.startsWith('$juck')) {
		return juckshuk(message)
	}
	if (message.content.startsWith('$kaji')) {
		return kaji(message)
	}
	if (message.content.startsWith('$kick')) {
		return kick(message)
	}
	if (message.content.startsWith('$kiss')) {
		return kiss(message)
	}
	if (message.content.startsWith('$konata')) {
		return konata(message)
	}
	if (message.content.startsWith('$krisku')) {
		return krisku(message)
	}
	if (message.content.startsWith('$kyonko')) {
		return kyonko(message)
	}
	if (message.content.startsWith('$lewd')) {
		return lewd(message)
	}
	if (message.content.startsWith('$list')) {
		return list(message)
	}
	if (message.content.startsWith('$mackie')) {
		return mackie(message)
	}
	if (message.content.startsWith('$maho')) {
		return maho(message)
	}
	if (message.content.startsWith('$mashrep')) {
		return mashrep(message)
	}
	if (message.content.startsWith('$megaflame')) {
		return megaflamerp(message)
	}
	if (message.content.startsWith('$meme')) {
		return meme(message)
	}
	if (message.content.startsWith('$memri')) {
		return memri(message)
	}
	if (message.content.startsWith('$monkey')) {
		return monkey(message)
	}
	if (message.content.startsWith('$nae')) {
		return naenae(message)
	}
	if (message.content.startsWith('$paradise')) {
		return paradise(message)
	}
	if (message.content.startsWith('$pet')) {
		return pet(message)
	}
	if (message.content.startsWith('$poop')) {
		return poopies(message)
	}
	if (message.content.startsWith('$punch')) {
		return punch(message)
	}
	if (message.content.startsWith('$purge')) {
		return purge(message)
	}
	if (message.content.startsWith('$pururin')){
		return pururin(message)
	}
	if (message.content.startsWith('$raid')) {
		return raid(message)
	}
	if (message.content.startsWith('$rape')) {
		return rape(message)
	}
	if (message.content.startsWith('$razor')) {
		return razor(message)
	}
	if (message.content.startsWith('$roles')) {
		return roles(message)
	}
	if (message.content.startsWith('$run')) {
		return run(message)
	}
	if (message.content.startsWith('$sair')) {
		return sair(message)
	}
	if (message.content.startsWith('$server')) {
		return server(message)
	}
	if (message.content.startsWith('$shoot')) {
		return shoot(message)
	}
	if (message.content.startsWith('$slap')) {
		return slap(message)
	}
	if (message.content.startsWith('$sleepy')) {
		return sleepy(message)
	}
	if (message.content.startsWith('$smug')) {
		return smug(message)
	}
	if (message.content.startsWith('$snor')) {
		return snorcz(message)
	}
	if (message.content.startsWith('$spank')) {
		return spank(message)
	}
	if (message.content.startsWith('$stab')) {
		return stab(message)
	}
	if (message.content.startsWith('$tights')) {
		return tights(message)
	}
	if (message.content.startsWith('$tubby')) {
		return tubby(message)
	}
	if (message.content.startsWith('$unban')) {
		return unban(message)
	}
	if (message.content.startsWith('$secretmemenoedenallowed')) {
		return secretmemenoedenallowed(message)
	}
	if (message.content.includes('$vore')) {
		return vore(message)
	}
	if (message.content.startsWith('$waifu')) {
		return waifu(message)
	}
	if (message.content.startsWith('$welcome')) {
		return welcome(message)
	}
	if (message.content.startsWith('$yes')) {
		return yes(message)
	}
}