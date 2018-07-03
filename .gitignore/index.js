const Discord = require('discord.js');
const PREFIX = "S-";
const everyone = "@";

const client = new Discord.Client();

var prefix = "S-";

client.login("NDYyMDE3NDE3Mzg0NTU4NjAy.DhcWBg.n7VjFFkVK3Iq2SP-8K445JYVs6M");

client.on("ready", function () {
  client.user.setActivity("S-help | " + (client.guilds.size - 0) + " servs | " + (client.users.size - 0) + " users ")
    
    client.user.setUsername("Sadri-BOT")
    console.log("*``*___*``*");
    console.log("Sadri-BOT - Connecté");
        console.log("*``*___*``*");
});

client.on('message', message => {
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args2.slice(1).join(" ");
    
    var reasontimed = args2.slice(2).join(' ')

    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var user = message.mentions.users.first();   
    if(message.content === "Salut @everyone"){ 
        message.channel.send("Salut");
        console.log("Le bot dit Salut");
    }

    if(message.content === "Bonjour @everyone"){
      message.channel.send("Bonjour");
      console.log("Le bot dit Bonjour");
    }

    if(message.content === "ça va"){
      message.channel.send("Oui et toi");
      console.log("Le bot dit Oui et toi");
    }

    if(message.content === "trkl"){
      message.channel.send("ba c'est bien, tfk");
      console.log("Le bot dit Ba c'est bien, tfk");
    }

    if(message.content === "R et toi"){
      message.channel.send("Je me développe MDR :joy: :joy: :joy:");
      console.log("Le bot dit Je me développe MDR joy joy joy");
    }

    if(message.content === "Ah c cool"){
      message.channel.send("Ouai mtn je peut répondre quand on me dit Salut ou Bonjour");
      console.log("Le bot dit Bonjour");
    }

    if(message.content === "Ah"){
      message.channel.send("B");
      console.log("Le bot dit B");
    }

    if(message.content === "C"){
      message.channel.send("D");
      console.log("Le bot dit D");
    }

    if(message.content === "E"){
      message.channel.send("F");
      console.log("Le bot dit F");
    }

    if(message.content === "G"){
      message.channel.send("H");
      console.log("Le bot dit H");
    }

    if(message.content === "Mais non tes méchant"){
      message.channel.send("Ah dsl mais c'est la vie j'ai gagner");
      console.log("Le bot dit Ah dsl mais c'est la vie j'ai gagner");
    }

    if(message.content === prefix + "guild"){
        message.channel.send("Envie de rejoindre la guilde mère de Sadri-BOT ? Venez faire un tour par ici ! ;) https://discord.gg/J6gprWB");
        console.log("Un utilisateur a effectué la commande pour rejoindre la Communauté Sadrinho27");
    }


    if(message.content === prefix + "invite"){
        message.channel.send("Lien d'invitation pour ajouter Sadri-BOT sur votre serveur, n'hésitez pas à l'utiliser ! D = https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1");
        console.log("Un utilisateur a effectué la commande pour m'inviter");
    }

    if(message.content === prefix + "dm"){
      message.reply("DM sent !");
      message.author.sendMessage("Hi.")
      console.log("Regarde tes messages privés");
    }

    if(message.content === "S-help"){
      message.reply("Aide envoyée en privé ! (S-hh pour afficher l'aide ici)");
      console.log("Un utilisateur a effectué la commande d'aide envoyée en PV");
    }

    if(message.content === "S-helpmod"){
        message.reply("Aide de modération envoyée en privé !");
        console.log("Un utilisateur a effectué la commande d'aide de modération envoyée en PV");
    }

    if(message.content === prefix + "help"){
      var help_embed = new Discord.RichEmbed()
      .setColor("ff0000")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
      .setTitle("Sadri-BOT - Page d'aide")
      .setThumbnail(message.author.avatarURL)
      .addField("COMMANDES CORE", "Les commandes de base")
      .addField("S-help", "Affiche cette page (genius) (Alias S-h)")
      .addField("S-helphere", "Affiche la page d'aide sur un channel textuel (Alias S-hh)")
      .addField("S-helpmod", "Affiche mes commandes de modérations")
      .addField("Bonjour", "Le bot te répond Salut")
      .addField("S-stats", "Le bot vous envoi des informations sur votre profil !")
      .addField("S-info", "Donne des informations sur le bot !")
      .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
      message.author.sendEmbed(help_embed);
      console.log("Un utilisateur a effectué la commande d'aide !")
    }

    if(message.content === prefix + "h"){
      var help_embed = new Discord.RichEmbed()
      .setColor("ff0000")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
      .setTitle("Sadri-BOT - Page d'aide")
      .setThumbnail(message.author.avatarURL)
      .addField("COMMANDES CORE", "Les commandes de base")
      .addField("S-help", "Affiche cette page (genius) (Alias S-h)")
      .addField("S-helphere", "Affiche la page d'aide sur un channel textuel (Alias S-hh)")
      .addField("S-helpmod", "Affiche mes commandes de modérations")
      .addField("Bonjour", "Le bot te répond Salut")
      .addField("S-stats", "Le bot vous envoi des informations sur votre profil !")
      .addField("S-info", "Donne des informations sur le bot !")
      .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
      message.author.sendEmbed(help_embed);
      console.log("Un utilisateur a effectué la commande d'aide !")
    }

    if(message.content === prefix + "helphere"){
      var help_embed = new Discord.RichEmbed()
      .setColor("ff0000")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
      .setTitle("Sadri-BOT - Page d'aide")
      .setThumbnail(message.author.avatarURL)
      .addField("COMMANDES CORE", "Les commandes de base")
      .addField("S-help", "Affiche cette page (genius) (Alias S-h)")
      .addField("S-helphere", "Affiche la page d'aide sur un channel textuel (Alias S-hh)")
      .addField("S-helpmod", "Affiche mes commandes de modérations")
      .addField("Bonjour", "Le bot te répond Salut")
      .addField("S-stats", "Le bot vous envoi des informations sur votre profil !")
      .addField("S-info", "Donne des informations sur le bot !")
      .setFooter("Sadri-BOT", "un bot par @_-Sadrinho27-_#8947")
      message.channel.sendEmbed(help_embed);
      console.log("Un utilisateur a effectué la commande d'aide !")
    }

    if(message.content === prefix + "hh"){
      var help_embed = new Discord.RichEmbed()
      .setColor("ff0000")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
      .setTitle("Sadri-BOT - Page d'aide")
      .setThumbnail(message.author.avatarURL)
      .addField("COMMANDES CORE", "Les commandes de base")
      .addField("S-help", "Affiche cette page (genius) (Alias S-h)")
      .addField("S-helphere", "Affiche la page d'aide sur un channel textuel (Alias  hh)")
      .addField("S-helpmod", "Affiche mes commandes de modérations")
      .addField("Bonjour", "Le bot te répond Salut")
      .addField("S-stats", "Le bot vous envoi des informations sur votre profil !")
      .addField("S-info", "Donne des informations sur le bot !")
      .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
      message.channel.sendEmbed(help_embed);
      console.log("Un utilisateur a effectué la commande d'aide !")
    }

    if(message.content === prefix + "helpmod"){
        var help_embed = new Discord.RichEmbed()
        .setColor("ff0000")
        .setURL("https://discordapp.com/oauth2/authorize/client_id=462017417384558602&scope=bot&permissions=-1")
      .setTitle("Sadri-BOT - Page d'aide")
        .setThumbnail(message.author.avatarURL)
        .addField("COMMANDES DE MODERATION", "Les commandes de modérations")
        .addField("S-warn [membre]", "Permet de warn quelqu'un")
        .addField("S-seewarns [membre]", "Permet de voir la liste des warns de quelqu'un")
        .addField("S-deletewarns [membre]", "Permet de supprimer un warn de quelqu'un")
        .addField("S-kick [membre]", "Kick l'utilisateur")
        .addField("S-ban [membre]", "Ban l'utilisateur")
        .addField("S-mute [membre]", "Permet de mute quelqu'un")
        .addField("S-unmute [membre]", "Permet de unmute quelqu'un")
        .addField("S-purge [nombre]", "Supprime le nombre de messages indiqué de 1 à 100")
        .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
        message.author.sendEmbed(help_embed)
        console.log("Un utilisateur a utiliser la commande d'aide de modération")
    }

    if(message.content === prefix + "help") {
      var help_embed = new Discord.RichEmbed()
      .setColor("ff0000")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
      .setTitle("Sadri-BOT - Page d'aide")
      .addField("AUTRES COMMANDES", "Les commandes useless")
      .addField("S-ping", "Grâce à cette commande, tu pourras savoir ton ping !")
      .addField("S-invite", "Obtenez mon lien d'invitation 3")
      .addField("S-guild", "Rejoignez le serveur de la grande communauté Sadrinho27 !")
      .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
      message.author.sendEmbed(help_embed);
    }

    if(message.content === prefix + "h") {
      var help_embed = new Discord.RichEmbed()
      .setColor("ff0000")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
      .setTitle("Sadri-BOT - Page d'aide")
      .addField("AUTRES COMMANDES", "Les commandes useless")
      .addField("S-ping", "Grâce à cette commande, tu pourras savoir ton ping !")
      .addField("S-invite", "Obtenez mon lien d'invitation 3")
      .addField("S-guild", "Rejoignez le serveur de la grande communauté Sadrinho27 !")
      .setFooter("Sadri-BOT", "un bot par @_-Sadrinho27-_#8947")
      message.author.sendEmbed(help_embed);
    }

    if(message.content === prefix + "helphere") {
      var help_embed = new Discord.RichEmbed()
      .setColor("ff0000")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
      .setTitle("Sadri-BOT - Page d'aide")
      .addField("AUTRES COMMANDES", "Les commandes useless")
      .addField("S-ping", "Grâce à cette commande, tu pourras savoir ton ping !")
      .addField("S-invite", "Obtenez mon lien d'invitation 3")
      .addField("S-guild", "Rejoignez le serveur de la grande communauté Sadrinho27 !")
      .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
      message.channel.sendEmbed(help_embed);
    }

    if(message.content === prefix + "hh") {
      var help_embed = new Discord.RichEmbed()
      .setColor("ff0000")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
      .setTitle("Sadri-BOT - Page d'aide")
      .addField("AUTRES COMMANDES", "Les commandes useless")
      .addField("S-ping", "Grâce à cette commande, tu pourras savoir ton ping !")
      .addField("S-invite", "Obtenez mon lien d'invitation 3")
      .addField("S-guild", "Rejoignez le serveur de la grande communauté Sadrinho27 !")
      .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
      message.channel.sendEmbed(help_embed);
    }

    if(message.content === prefix + "help"){ 
      var help_embed = new Discord.RichEmbed()
      .setColor("ff0000")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
      .setTitle("Sadri-BOT - Page d'aide")
      .setThumbnail(message.author.avatarURL)
      .addField("INFO SUR MON CREATEURS", "PS Allez vous abonner a sa chaine")
      .addField("Chaine Youtube de mon créateur https://www.youtube.com/c/Sadrinho27", "N'hésitez pas a partagé un max :D")
      .addField("Son pseudo discord @_-Sadrinho27_-#8947", "Que vous avez a la fin de chaque S-help")
      .addField("Son serveur discord https://discord.gg/J6gprWB", "(Vous pouver aussi l'obtenir avec la commande S-guild)")
      .addField("Son pseudo PSN xXTrolDeMergeZXx, Sur PS3 ou PS4")
      .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
      message.author.sendEmbed(help_embed);
      console.log("Un utilisateur a effectué la commande d'aide de toute les informations sur le créateur du bot")
   }

   if(message.content === prefix + "h"){ 
    var help_embed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
    .setTitle("Sadri-BOT - Page d'aide")
    .setThumbnail(message.author.avatarURL)
    .addField("INFO SUR MON CREATEURS", "PS Allez vous abonner a sa chaine")
    .addField("Chaine Youtube de mon créateur https://www.youtube.com/c/Sadrinho27", "N'hésitez pas a partagé un max :D")
    .addField("Son pseudo discord @_-Sadrinho27_-#8947", "Que vous avez a la fin de chaque S-help")
    .addField("Son serveur discord https://discord.gg/J6gprWB", "(Vous pouver aussi l'obtenir avec la commande S-guild)")
    .addField("Son pseudo PSN xXTrolDeMergeZXx, Sur PS3 ou PS4")
    .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
    message.author.sendEmbed(help_embed);
    console.log("Un utilisateur a effectué la commande d'aide de toute les informations sur le créateur du bot")
 }

 if(message.content === prefix + "helphere"){ 
    var help_embed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
    .setTitle("Sadri-BOT - Page d'aide")
    .setThumbnail(message.author.avatarURL)
    .addField("INFO SUR MON CREATEURS", "PS Allez vous abonner a sa chaine")
    .addField("Chaine Youtube de mon créateur https://www.youtube.com/c/Sadrinho27", "N'hésitez pas a partagé un max :D")
    .addField("Son pseudo discord @_-Sadrinho27_-#8947", "Que vous avez a la fin de chaque S-help")
    .addField("Son serveur discord https://discord.gg/J6gprWB", "(Vous pouver aussi l'obtenir avec la commande S-guild)")
    .addField("Son pseudo PSN xXTrolDeMergeZXx, Sur PS3 ou PS4")
    .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
    message.channel.sendEmbed(help_embed);
    console.log("Un utilisateur a effectué la commande d'aide de toute les informations sur le créateur du bot")
 }

 if(message.content === prefix + "hh"){ 
    var help_embed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
    .setTitle("Sadri-BOT - Page d'aide")
    .setThumbnail(message.author.avatarURL)
    .addField("INFO SUR MON CREATEURS", "PS Allez vous abonner a sa chaine")
    .addField("Chaine Youtube de mon créateur https://www.youtube.com/c/Sadrinho27", "N'hésitez pas a partagé un max :D")
    .addField("Son pseudo discord @_-Sadrinho27_-#8947", "Que vous avez a la fin de chaque S-help")
    .addField("Son serveur discord https://discord.gg/J6gprWB", "(Vous pouver aussi l'obtenir avec la commande S-guild)")
    .addField("Son pseudo PSN xXTrolDeMergeZXx, Sur PS3 ou PS4")
    .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
    message.channel.sendEmbed(help_embed);
    console.log("Un utilisateur a effectué la commande d'aide de toute les informations sur le créateur du bot")
 }

    if(message.content === prefix + "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor(ff0000)
        .setURL("https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
        .setTitle("Sadri-BOT")
        .setThumbnail(client.user.avatarURL)
        .addField("Développeur et bot owner", "@Sadrinho27#8947")
        .addField("Language", "Javascript")
        .addField("API", "Discord.js")
        .addField("Serveurs", + (client.guilds.size - 0) + "")
        .addField(Utilisateurs, + (client.users.size - 0) + "")
        .addField("Serveur Discord", "https://discord.gg/J6gprWB")
        .addField("Lien d'invitation", "https://discordapp.com/oauth2/authorize?client_id=462017417384558602&scope=bot&permissions=-1")
        .setFooter("Sadri-BOT, un bot par @_-Sadrinho27-_#8947")
        message.channel.send(info_embed)
        console.log("Un utilisateur a effectué la commandes d'info !")
    }

     if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission(MUTE_MEMBERS)) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
           console.log("Un utilisateur a utilisé la commande de mute")
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {

            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");

        }

        if(!message.guild.member(client.user).hasPermission(ADMINISTRATOR)) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
          message.channel.send(`${mute.user.username} est mute !`);
        })
    }

    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission(ADMINISTRATOR)) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');

        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {

            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");

        }

        if(!message.guild.member(client.user).hasPermission(ADMINISTRATOR)) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
          message.channel.send(`${mute.user.username} n'est plus mute !`);
        })
    }

var fs = require('fs');
 
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(prefix + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
 
            const date = new Date().toUTCString();
 
            if (warns[message.guild.id] === undefined)
 
              warns[message.guild.id] = {};
 
            if (warns[message.guild.id][mentioned.id] === undefined)
 
              warns[message.guild.id][mentioned.id] = {};
 
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
 
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
 
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
 
            } else {
 
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
 
                time: date,
 
                user: message.author.id};
 
            }
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
message.delete();
 
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');
 
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
}
 
 
 
  if (message.content.startsWith(prefix+"seewarns")||message.content===prefix+"seewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
    const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size !== 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
 
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
 
          }
 
          message.channel.send(arr.join('\n'));
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+prefix+"seewarns <user> <raison>");
 
          console.log(args);
 
        }
 
      } else {
 
        message.channel.send("Erreur mauvais usage: "+prefix+"seewarns <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }
 
 
 
 
 
  if (message.content.startsWith(prefix+"deletewarns")||message.content===prefix+"deletewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
 
   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" n'a aucun warn");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send("**:x: Ce warn n'existe pas**");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
 
            return;
 
          } if (args[1] === "tout") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);
 
            return;
 
          } else {
 
            message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");
 
          }
 
        } else {
 
          message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");
 
        }
 
      } else {
 
       message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");
 
      }
 
    } else {
 
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
 
    }
 
  }

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) { 
        case "stats":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;
        var stats_embed = new Discord.RichEmbed()

        .setColor("ff0000")
        .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
        .addField(`ID de l'utilisateur :id:`, msgauthor, true)
        .addField ("Date de création de l'utilisateur :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply ("Tu peux regarde tes messages privés ! Tu viens de recevoir tes statistiques")
        message.author.send({embed:stats_embed});
        console.log("Un utilisateur a effectué la commande pour voir ses statistiques")
        break;
        
        case "ping":
        message.channel.sendMessage("Pong! Tu as actuellement `" + bot.ping + " ms !` :D");
        message.delete();
        break;

        case "kick":
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande. :x:");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu n'as pas mis son pseudo au complet ! :o")
            message.guild.member(user).kick();
            message.channel.send(user.toString() + " a bien été kick ✅")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "KICK")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#ff0000")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            message.delete();
            break;
            case "ban":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois bannir..")
            
            message.guild.ban(user, 2);
            message.channel.send(user.toString() + " a bien été banni ✅")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "BAN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#ff0000")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            message.delete();
            break;

            case "purge":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            var messagecount = parseInt(args2.join(" "));
            if(!messagecount) return message.channel.send("Tu dois mettre un certain nombre de messages.")
            message.channel.fetchMessages({
                limit: messagecount
            }).then(messages => message.channel.bulkDelete(messagecount));
                        message.delete()
            var embed = new Discord.RichEmbed()
            .addField("Commande :", "PURGE")
            .addField("Modérateur :", message.author.username)
            .addField("Message supprimé", messagecount)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#ff0000")
            .setFooter("Ouf ! Sa as fait un bon ménage dans le channel ! ^^")
            message.delete()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            break;;
    }

});
