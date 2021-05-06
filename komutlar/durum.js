module.exports = ({
    name: "durum",
    code: `
$onlyIf[$message==;]
$thumbnail[https://cdn.discordapp.com/app-icons/748888622266056744/f933780711260c1b35a88cc3b3f8ab2f.png?size=256]
$title[Bot Durum Paneli]
$addField[Bellek;$ramMB;yes]
$addField[İşlemci;$cpu%;yes]
$addField[Süre;$uptime;yes]
$footer[Ghost;https://cdn.discordapp.com/app-icons/748888622266056744/f933780711260c1b35a88cc3b3f8ab2f.png?size=256]
$addTimestamp
$dm
    `
    });