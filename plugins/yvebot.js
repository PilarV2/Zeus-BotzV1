let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
  
let handler = async (m, { conn }) => {
let caption = `*HALO Bang*\n*Saya Zeus Bot*\n*Pilih Menu Di Bawah Yaa Bree*\n*Spam = Banned*\n*Telp = Blok*\n\n*Join Group WhatsApp*\nhttps://chat.whatsapp.com/E9g9yrUEFVk6QBZ14arnIh\n\n*Untuk Melihat Menu Bot Ketik .menu*`.trim()
conn.send3Button(m.chat, caption, `Powered By Baileys\nCreated Zeus Recode By Pilar\n`.trim(), '🧾MENU', '.?', '🍭Owner MikeBot', '.owner', '📖Info Bot', '.infobot', m)
}
handler.help = ['botwangsaf']
handler.command = /^(botwangsaf)$/i
handler.tags = ['main']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = false

handler.fail = null
handler.exp = 20

module.exports = handler
