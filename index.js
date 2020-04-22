const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();
const ownerID = '473526373575819264';

const active = new Map();

const serverStats = {
    memberCoutID: '702401815815127061'
};

fs.readdir("./commands", (err, files) => { // Подключение команд 

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js"); // Подключение команд 
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`); // основных команд
  console.log(`${f} Загружен!`);
  bot.commands.set(props.help.name, props);
});
});

fs.readdir("./commands/pic", (err, files) => { // Подключение изображений

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js"); // Подключение команд 
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/pic/${f}`); //
  console.log(`${f} Изображение загружена!`);
  bot.commands.set(props.help.name, props);
});
});
  
bot.on("message", async message => {

  let prefix = config.prefix;
  if (!message.content.startsWith(config.prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

bot.login(process.env.BOT_TOKEN)

