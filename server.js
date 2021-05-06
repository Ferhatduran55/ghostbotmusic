var dbd = require('dbd.js')
var fs = require('fs')
var bot = new dbd.Bot({
	token:process.env.TOKEN,
	prefix:"$getServerVar[prefix]"
})
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {	
	const command = require(`./komutlar/${file}`)
	bot.command({
		name: command.name,
		code: command.code
	})
}
bot.variables({
  prefix:"gm!",
  premium:0,
  durum:0,
})

  bot.command({
    name:"prefix",
    code:`
    $changeNickname[839619743719489566;$getServerVar[prefix] Ghost Bot Music]
    $argsCheck[1;Prefix Değiştirmek İçin $getServerVar[prefix]prefix <yenideğer>]
    $setServerVar[prefix;$noMentionMessage]
    Artık Prefixim $noMentionMessage
    $onlyPerms[admin;Bunun İçin Yetkin Bulunmuyor]
    $onlyIf[$message!=;Bir Prefix Gir]`
  })//Prefix Sistemi

bot.command({
  name:"premium-ver",
  code:`
  $color[FF0000]
  $author[Premium kaldırıldı!]
  $dm[464507280600072192]
  $onlyForIDs[464507280600072192;Geliştiricim Değilsin]
  $onlyIf[$message[1]!=;Lütfen Birini Etiketle]
  $setUserVar[premium;1;$mentioned[1]]
  $description[<@$mentioned[1]> Kullanıcısı artık Premium!]`
})//Kod Deneme

bot.command({
  name:"premium-sil",
  code:`
  $color[00FF04]
  $author[Premium verildi!]
  $dm[464507280600072192]
  $onlyForIDs[464507280600072192;Geliştiricim Değilsin]
  $onlyIf[$message[1]!=;Lütfen Birini Etiketle]
  $setUserVar[premium;0;$mentioned[1]]
  $description[<@$mentioned[1]> Kullanıcısı artık Premium değil!]`
})//Kod Deneme

bot.command({
  name:"cmd",
  code:`
  $onlyForIDs[464507280600072192;Geliştiricim Değilsin]
  $onlyIf[$message!=;Kod Denemek İçin Bişi Gir]
  $eval[$message]
  `
})

bot.command({
  name:"ping",
  code:`Pingim $pingms`
})

bot.command({
  name:"komutlar",
  code:`
  $color[FF6C00]
  $author[Komut Listesi:]
  $description[\`devam\`,\`duraklat\`,\`durdur\`,\`durum\`,\`geç\`,\`invite\`,\`ses\`,\`tekrarla\`,\`çal\`,\`sıralama\`]`
})

bot.readyCommand({
channel: "839619647913066549",
code: `
$dm[464507280600072192]
$color[$random[100000;999999]]
$description[Aktifleştirildim.

Güncel İstatistiklerim

\`\`$serverCount\`\` Sunucu !
\`\`$allMembersCount\`\` Üye !]
`
})
//$editChannel[839675528684240916;$default;Üye Sayısı:$membersCount;$default;$default;$default;$default;;]
//$setStatus[$getServerVar[prefix];LISTENING;idle]
bot.loopCommand({
code: `
$editMessage[839811691839881266;**Toplam Kullanıcı Sayısı:** \`$allMembersCount\`
**Toplam Sunucu Sayısı:** \`$serverCount\`
**Toplam Kanal Sayısı:** \`$allChannelsCount\`
**Toplam Kategori Sayısı:** \`$allChannelsCount[category]\`
**Toplam Metin Kanalı Sayısı:** \`$allChannelsCount[text]\`
**Toplam Ses Kanalı Sayısı:** \`$allChannelsCount[voice]\`
**Toplam Duyuru Kanalı Sayısı:** \`$allChannelsCount[news]\`

**Sunucular:** \`$serverNames[ / ]\`
**Sunucular(ID):** ||\`$serverIDs[ / ]\`||

**Güncellendi:** \`$hour:$minute:$second\`;839810649634766848]
$timezone[Europe/istanbul]
`,
executeOnStartup: true,
every: 3000
})

bot.loopCommand({
code: `
$if[$getVar[durum]==0]
$setStatus[$getServerVar[prefix;$guildID];LISTENING;idle]
$setVar[durum;1]
$else
  $if[$getVar[durum]==1]
  $setStatus[$allMembersCount Kullanıcı;LISTENING;idle]
  $setVar[durum;2]
  $else
    $if[$getVar[durum]==2]
    $setStatus[$serverCount Sunucu;WATCHING;idle]
    $setVar[durum;3]
    $else
      $if[$getVar[durum]==3]
      $setStatus[$getServerVar[prefix]komutlar;LISTENING;idle]
      $setVar[durum;0]
      $else
        $setStatus[$getServerVar[prefix;$guildID];LISTENING;idle]
        $setVar[durum;0]
      $endif
    $endif
  $endif
$endif
`,
executeOnStartup: true,
every: 9000
})

bot.botJoinCommand({
channel: "839810649634766848",
code: `
$dm[464507280600072192]
Sunucuya katıldım: \`\`$serverName\`\`
`
})
bot.botLeaveCommand({
channel: "839810649634766848",
code: `
$dm[464507280600072192]
Artık sunucuda değilim: \`\`$serverName\`\`
`
})

bot.command({
  name:"prefixim",
  code:`
  $color[00FF04]
  $author[Sunucunun Prefixi: \`$getServerVar[prefix]\`]`
})

//$editChannel[839675528684240916;$default;Toplam Kullanıcı Sayısı:$allMembersCount;$default;$default;$default;$default;;]
bot.loopCommand({
code: `
$editChannel[839850606554251286;$default;Toplam Sunucu:$serverCount;$default;$default;$default;$default;;]
$editChannel[839675528684240916;$default;Toplam Kullanıcı:$allMembersCount;$default;$default;$default;$default;;]
$editChannel[839851528365015061;$default;Toplam Kanal:$allChannelsCount;$default;$default;$default;$default;;]
`,
channel: "839843934200791050",
executeOnStartup: true,
every: 5000
})

bot.command({
  name:"$alwaysExecute",
  code:`
  $useChannel[839843934200791050]
  $color[FF6C00]
  $description[$thumbnail[$authorAvatar]
  Komut Kullanıldı !
  
  Kullanılan Komut : $message
  
  Kullanılan Kanal : <#$channelID>
  
  Kullanan Kişi : <@$authorID>]
  $footer[$username#$discriminator;$authorAvatar]
  $addTimestamp
  $onlyIf[$checkContains[$message;$getServerVar[prefix]]==true;]
  `,
nonPrefixed: true
})