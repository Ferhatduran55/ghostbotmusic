module.exports = ({
    name: "tekrarla",
    code: `
    $color[00ff51]
$author[$replaceText[$replaceText[$loopQueue;true;Şarkı Tekrarlanıyor;-1];false;Şarkı Tekrarlanmıyor;-1];https://cdn.discordapp.com/attachments/778283166418468887/781482437590253598/tekrarla-removebg-preview.png]

$onlyIf[$voiceID!=;Ses Kanalına Girmelisin]

$suppressErrors[Müzik Çalmıyor Nasıl Tekrara Alayım?]
    `
    });