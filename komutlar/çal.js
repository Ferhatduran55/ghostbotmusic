module.exports = {
    name: "çal",
    code: `$color[00ff51]
$author[Müzik Çalınıyor;https://e7.pngegg.com/pngimages/784/381/png-clipart-white-and-red-musical-note-logo-text-symbol-brand-music-text-trademark.png]
$description[Şuanda Oynatılan Müzik **$songInfo[title]**
Müzik Uzunluğu **$songInfo[duration]** Saniyedir.

Müzik Linki $songInfo[url]
Sıradaki Müzik Sayısı: $queueLength]
$footer[Müziği Çalan Kişi $username;$authorAvatar]
$playSong[$message;Böyle bir müzik bulamadım tekrar denermisin]
$onlyIf[$voiceID!=;Ses Kanalına Girmelisin]
$onlyIf[$message!=;Bir Müzik İsmi Girmelisin]`
}