const avatar = require('../commands/avatar')
const ban = require('../commands/ban')
const cbt = require('../commands/cbt')
const choke = require('../commands/choke')
const crazimo = require('../commands/crazimo')
const cutie = require('../commands/cutie')
const dodge = require('../commands/dodge')
const doggless = require('../commands/doggless')
const emojis = require('../commands/emojis')
const feet = require('../commands/feet')
const fuck = require ('../commands/fuck')
const handhold = require('../commands/handhold')
const help = require('../commands/help')
const highfive = require('../commands/highfive')
const hug = require('../commands/hug')
const icon = require('../commands/icon')
const ikey = require('../commands/ikey')
const info = require('../commands/info')
const invite = require('../commands/invite')
const kick = require('../commands/kick')
const kiss = require('../commands/kiss')
const pet = require('../commands/pat')
const profile = require('../commands/profile')
const punch = require('../commands/punch')
const purge = require('../commands/purge')
const raid = require('../commands/raid')
const rape = require('../commands/rape')
const roles = require('../commands/roles')
const run = require('../commands/run')
const server = require('../commands/server')
const shoot = require('../commands/shoot')
const slap = require('../commands/slap')
const spank = require('../commands/spank')
const stab = require('../commands/stab')
const tights = require('../commands/tights')
const video = require('../commands/video')
const vore = require('../commands/vore')
const waifu = require('../commands/waifu')

module.exports = (client, message) => {
	if (message.content.startsWith('$av')) {
		return avatar(message)
	}
	if (message.content.includes('$ban')) {
		return ban(message)
	}
	if (message.content.startsWith('$cbt')) {
		return cbt(message)
	}
	if (message.content.startsWith('$choke')) {
		return choke(message)
	}
	if (message.content.startsWith('$crazimo')) {
		return crazimo(message)
	}
	if (message.content.startsWith('$cutie')) {
		return cutie(message)
	}
    if (message.content.startsWith('$dodge')) {
		return dodge(message)
	}
    if (message.content.startsWith('$doggless')) {
		return doggless(message)
	}
	if (message.content.startsWith('$emojis')) {
		return emojis(message)
	}
	if (message.content.includes('$feet')) {
		return feet(message)
	}
	if (message.content.startsWith('$fuck')) {
		return fuck(message)
	}
	if (message.content.startsWith('$hh')) {
		return handhold(message)
	}
	if (message.content.startsWith('$help')) {
		return help(message)
	}
    if (message.content.startsWith('$highfive')) {
		return highfive(message)
	}
	if (message.content.startsWith('$hug')) {
		return hug(message)
	}
	if (message.content.startsWith('$icon')) {
		return icon(message)
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
	if (message.content.startsWith('$kick')) {
		return kick(message)
	}
	if (message.content.startsWith('$kiss')) {
		return kiss(message)
	}
	if (message.content.startsWith('$pat')) {
		return pet(message)
	}
    if (message.content.startsWith('$profile')) {
		return profile(message)
	}
	if (message.content.startsWith('$punch')) {
		return punch(message)
	}
	if (message.content.startsWith('$purge')) {
		return purge(message)
	}
	if (message.content.startsWith('$raid')) {
		return raid(message)
	}
	if (message.content.startsWith('$rape')) {
		return rape(message)
	}
	if (message.content.startsWith('$roles')) {
		return roles(message)
	}
	if (message.content.startsWith('$run')) {
		return run(message)
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
	if (message.content.startsWith('$spank')) {
		return spank(message)
	}
	if (message.content.startsWith('$stab')) {
		return stab(message)
	}
	if (message.content.startsWith('$tights')) {
		return tights(message)
	}
	if (message.content.startsWith('$webm')) {
		return video(message)
	}
	if (message.content.includes('$vore')) {
		return vore(message)
	}
	if (message.content.startsWith('$waifu')) {
		return waifu(message)
	}
}
