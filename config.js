const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_18_05_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICAzMixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MixcbiAgICAgICAgMjUwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc1LFxuICAgICAgICA5MixcbiAgICAgICAgODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc2LFxuICAgICAgICA3MixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNCxcbiAgICAgICAgOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMixcbiAgICAgICAgMzksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU3LFxuICAgICAgICA5OSxcbiAgICAgICAgNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjksXG4gICAgICAgIDgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNEVhMEZTaDZxV1B0WTVTRGFTbm1aNHhJWERYaUNkZDc2QktnT1JhQ3dmMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR19wd2dOV3dROWFUZzI1akhvelJJQVwiLFxuICBcInBob25lSWRcIjogXCIwMDY3ZTg1YS05OWQwLTRjZTItODFiNS0zNWFiMDY1NTFhMWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk5LFxuICAgICAgNSxcbiAgICAgIDQyLFxuICAgICAgMTE3LFxuICAgICAgMTQ5LFxuICAgICAgOTYsXG4gICAgICAzMCxcbiAgICAgIDI0NyxcbiAgICAgIDEzMCxcbiAgICAgIDMyLFxuICAgICAgOTMsXG4gICAgICAxMDEsXG4gICAgICAxNCxcbiAgICAgIDEyMSxcbiAgICAgIDIzMCxcbiAgICAgIDQ4LFxuICAgICAgNjksXG4gICAgICAzNSxcbiAgICAgIDcyLFxuICAgICAgMjI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDYwLFxuICAgICAgMjE4LFxuICAgICAgOTQsXG4gICAgICAyMDQsXG4gICAgICA5MyxcbiAgICAgIDQ5LFxuICAgICAgMTMyLFxuICAgICAgMTU5LFxuICAgICAgMjI1LFxuICAgICAgNDgsXG4gICAgICAzNixcbiAgICAgIDgyLFxuICAgICAgMTQzLFxuICAgICAgMTI1LFxuICAgICAgMTc0LFxuICAgICAgMTg0LFxuICAgICAgNTYsXG4gICAgICAyMTcsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0hOMVZMTFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0piNytkVUNFTFdXODhBR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6TExObUpVTmMyQmdoWjA3aEJFZHhVYXhMSC9mdllSUWU0NTZjaHJEQ293MjRGcEoxeGhSNklEUDEwQlBuSXMzWithMForU2RwOU1xM0RUNmdXcXRDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHcVI4eGR3TWhFdlJEMHN1MTZRZk9wNHVuelJiOWlYVllhek1CbU0raGExVERkQWNYOFkwQjlXWHo4YzdlVnNhekhoUHo5TkhaK3dPR0JiekVUMWhndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY3MTc0OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb3FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJvcS5qc29uIjogIntcImtleURhdGFcIjpcIkJXd25BYWhaV1Z4VHdpeVJsbFFzdi85MDFKaFZydFBmbE95RWMva216dkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
