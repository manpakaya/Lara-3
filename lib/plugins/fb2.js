const {cmd , commands} = require('../command');
const { igdl } = require('ruhend-scraper');

cmd({
    pattern: "fb2",
    alias: ["facebook2","fbdl2"],
    desc: "To download facebook videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

  if (!args[0]) {
    return reply('*give me a vaild Facebook url*');
  }

  await m.react('🕒');
  return reply('*`Downloading•••`\n> Lααɾα-ᴍᴅ*')
  let res;
  try {
    res = await igdl(args[0]);
  } catch (error) {
    return reply('*`Error obtaining data.`*');
  }

  let result = res.data;
  if (!result || result.length === 0) {
    return reply('*`No resalt found.`*');
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)");
  } catch (error) {
    return reply('*`Error data loss.`*');
  }

  if (!data) {
    return reply('*`No data found.`*');
  }

  await m.react('✅');
  let video = data.url;
  let dev = '*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n> Lααɾα-ᴍᴅ'

  try {
    await conn.sendMessage(m.chat, { video: { url: video }, caption: dev, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m });
  } catch (error) {
    return reply('*`Error download video.`*');
  await m.react('❌');
  }
}catch(e){
console.log(e)
  reply(`${e}`)
}
});
