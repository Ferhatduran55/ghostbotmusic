module.exports = ({
    name: "geç",
    code: `
    $color[00ff51]
$author[Şarkı Geçildi;https://cdn.discordapp.com/attachments/778283166418468887/781479960296685598/atla-removebg-preview.png]
$skipSong
$description[Geçilen Müzik [$songInfo[title]\\]($songInfo[url])]

$onlyIf[$voiceID!=;Ses Kanalına Girmelisin]

$suppressErrors[Müzik Çalmıyor Nasıl Geçeyim ?]
    `
    });