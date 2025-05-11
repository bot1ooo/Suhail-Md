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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_30_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MCxcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTksXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk4LFxuICAgICAgICA0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk5LFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJDcTBVSElZK1FFWDZvZTl1dGdNSmN4bmRuQm56NXVlWCtYUnZ5ckpXUG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZUYlVrX3lzVE5PMHhOSHlvUDNMNlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDcwYmZkMmYtZTA4Yy00Yjk5LTk3NGEtOTJlOGQ5NGMxNGU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMTA4LFxuICAgICAgNjUsXG4gICAgICAxNjcsXG4gICAgICA5LFxuICAgICAgNDksXG4gICAgICAxMzgsXG4gICAgICAyMjQsXG4gICAgICAyMzcsXG4gICAgICAxOTIsXG4gICAgICAxNzYsXG4gICAgICAyMjMsXG4gICAgICAxNTgsXG4gICAgICAzMyxcbiAgICAgIDIzLFxuICAgICAgNzQsXG4gICAgICAzLFxuICAgICAgMjYsXG4gICAgICAxMjAsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAxOTQsXG4gICAgICA5OSxcbiAgICAgIDIzOSxcbiAgICAgIDIzLFxuICAgICAgMjM4LFxuICAgICAgMTYwLFxuICAgICAgMzQsXG4gICAgICA5OSxcbiAgICAgIDE1MSxcbiAgICAgIDE0MixcbiAgICAgIDEwMCxcbiAgICAgIDk4LFxuICAgICAgMjExLFxuICAgICAgODIsXG4gICAgICAyMDgsXG4gICAgICAyNixcbiAgICAgIDgsXG4gICAgICA4MyxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhROExITFQ3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovNytkVUNFTVN3Z3NFR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0cmRESmJiT1krTmNxS3lkNkxsd3VOZ0Voakc0Wk1qSDkwTWZzQktKQW9QTlBiUVY1YmIzOUlsMm1qU2ROYitpeThFNFY0eVR0TmQyWVQvbklLbTVBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2SVlFMGY5UW54VHJnTUVYTFlhRDNTcGZrTXZISi9udjg5ZkpUdDBTM3JBbnltYWNLYjFhRVBQZXcwOUpNdzdBVHNtK3dnYXBlMzNaYkNCTzdNNWhnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2OTY2NjAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm95XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCb3kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUSzkxMmJqM1ZBT2xVNGJJWURZYUZ6emRaVU5GS2xiNDRTMk1MZ0MrQUQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjgwNzIwODc4OVwifSIKfQ=="  // PUT your SESSION_ID 


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
