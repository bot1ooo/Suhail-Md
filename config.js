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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_09_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MixcbiAgICAgICAgMixcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMwLFxuICAgICAgICA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg4LFxuICAgICAgICA4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaG5KeU1mYXpYZVhjTnpHUGxkMjY3UlQxUmVaQzM0dS90VjVFQ0UySHRiYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZWgxckh4VldRRldCTDd4TDh3M3pmZ1wiLFxuICBcInBob25lSWRcIjogXCJmNTg5ZDgyNS0wMWU2LTQ1ZTYtYWQ2MS0zZGZmODNiZjYwYmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICA2NSxcbiAgICAgIDE4MixcbiAgICAgIDIzLFxuICAgICAgMjUyLFxuICAgICAgMjQzLFxuICAgICAgMTQsXG4gICAgICAyMjAsXG4gICAgICA2MyxcbiAgICAgIDEyMSxcbiAgICAgIDIwMCxcbiAgICAgIDIyMixcbiAgICAgIDE4MixcbiAgICAgIDEsXG4gICAgICAxNTYsXG4gICAgICAxNzAsXG4gICAgICA0OSxcbiAgICAgIDQ5LFxuICAgICAgMjI0LFxuICAgICAgMTE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDEwNSxcbiAgICAgIDIyOSxcbiAgICAgIDE0NyxcbiAgICAgIDExOCxcbiAgICAgIDEyNCxcbiAgICAgIDE0MixcbiAgICAgIDIzMSxcbiAgICAgIDk4LFxuICAgICAgMTkwLFxuICAgICAgMjMxLFxuICAgICAgMTU2LFxuICAgICAgMTc2LFxuICAgICAgMjUxLFxuICAgICAgMTUwLFxuICAgICAgMTgsXG4gICAgICAyMDksXG4gICAgICAwLFxuICAgICAgMTU1LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVBSRFFCWTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjc3K2RVQ0VLS2QvOEFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9PUVhRc28zTVlJOEsrRXFJaktFQnlhQmVJVStOOHF4RjFGODVSN1dhMWEyb1ZkaEljcjM1M0JmUnVQcmVvNFhDaXg5OGpIUDh2WXNWM3JiVkRRakRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImkrY1gyUjRKTExPclhMOU1vQUdLZ3NYYUVBTW13bG1mUVFONXFSUU9hcTdXby9hNzBSd0RXcmNZQ05aN3hUMloxTnRDSk9wdVN6YVFwVlg3dFI2eER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY5MTQ5ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb3lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJveS5qc29uIjogIntcImtleURhdGFcIjpcIlRLOTEyYmozVkFPbFU0YklZRFlhRnp6ZFpVTkZLbGI0NFMyTUxnQytBRDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ2ODA3MjA4Nzg5XCJ9Igp9"  // PUT your SESSION_ID 


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
