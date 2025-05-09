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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_12_05_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjMyLFxuICAgICAgICA4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNSxcbiAgICAgICAgNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MixcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkzLFxuICAgICAgICA2NixcbiAgICAgICAgMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDg1LFxuICAgICAgICA1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEyLFxuICAgICAgICA2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNpVzYyZzZLakJFUG1hN2xWSTR2bjJaajJpYXJGNHdtMlZHY2c4QlZJTmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtkV2lXY25XVEc2NEpGcl9NWWdwS1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmM5ZTM2OWUtNzIxNC00YTNkLTk1NTYtMTZiODc5NTNmYzE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgMyxcbiAgICAgIDg5LFxuICAgICAgMTExLFxuICAgICAgNDgsXG4gICAgICAxMjEsXG4gICAgICAxODQsXG4gICAgICAxMjUsXG4gICAgICA2LFxuICAgICAgMTQ4LFxuICAgICAgMTgsXG4gICAgICAyMzAsXG4gICAgICAxNzMsXG4gICAgICA3MCxcbiAgICAgIDExMyxcbiAgICAgIDkzLFxuICAgICAgNjQsXG4gICAgICAyMSxcbiAgICAgIDQ4LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICA4MSxcbiAgICAgIDE4MyxcbiAgICAgIDcxLFxuICAgICAgMTQyLFxuICAgICAgMjEsXG4gICAgICAxMjQsXG4gICAgICAxMjUsXG4gICAgICAyNSxcbiAgICAgIDE1OSxcbiAgICAgIDE3NSxcbiAgICAgIDY2LFxuICAgICAgMjAxLFxuICAgICAgOCxcbiAgICAgIDE5OCxcbiAgICAgIDEzMSxcbiAgICAgIDE5MCxcbiAgICAgIDE1NyxcbiAgICAgIDE2LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVdCVEpLTUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmNytkVUNFTWYwOU1BR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRUGgzSEFuWHQ4MzR3NFlka2hSV0xNQUxzOFFpZnZOWlpLbXVJZDBWbXFxcUtiZnZvOERVdWlTcUpuQXlZMFR5aVl6Q3BFeWdKU0VmUlNZcmlibVNCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNb1MvY3JRbWR0Y3k5QVhNWVFDWFVNQm9nZG0yMVM4blJ1WFZWenhpbnp4M0FRaTJFQ2JocWRMdktIbVhjQy8vWktTdzF3UnJuUTEzRWFnOHRiWCtEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY3NDU5MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb3FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJvcS5qc29uIjogIntcImtleURhdGFcIjpcIkJXd25BYWhaV1Z4VHdpeVJsbFFzdi85MDFKaFZydFBmbE95RWMva216dkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
