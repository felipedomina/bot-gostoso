const help = (prefix) => {
	return `> *Sticker Commands* <
comando : *${prefix}sticker* or *${prefix}stiker*
desc : convert image/gif/video to sticker
uso : reply image/gif/video, or send image/gif/video with caption\n
comando : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}toimg*
desc : converter adesivo em imagem
uso : adesivo de resposta\n
comando : *${prefix}tsticker* or *${prefix}tstiker*
desc : convert text to sticker
uso : *${prefix}tsticker text in here*\n
> *Meme Commands* <
command : *${prefix}meme*
desc : imagens aleatórias de meme [english]
uso : basta enviar o comando\n
comando : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
uso : basta enviar o comando\n
> *Others Commands* <
comando : *${prefix}gtts*
desc : convert text to speech/audio
uso : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
comando : *${prefix}loli*
desc : imagens aleatórias de loli
uso : basta enviar o comando\n
comando : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
uso : basta enviar o comando\n
comando : *${prefix}url2img*
desc : take web screenshots
uso : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : sua mensagem será respondida por simi
uso : *${prefix}simi yourmessage*\n
comando : *${prefix}ocr*
desc : pegue o texto na foto
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}wait*
desc : procure anime com imagem [ O que anime é isso / aquilo ]
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}setprefix*
desc : substituir prefixo
uso : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
nota : este comando só pode ser usado pelo proprietário do bot\n
> *Group Comands* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
uso : *${prefix}add 62813xxxxx*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}kick*
desc : chutar membros do grupo
uso : *${prefix}kick @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}promote*
desc : make the group member as group admin
uso : *${prefix}promote @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}demote*
desc : make the group admin as group member
uso : *${prefix}demote @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}linkgroup*
desc : pegue o link do grupo
uso : basta enviar o comando
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}leave*
desc : Faça o bot sair do grupo
uso : basta enviar o comando
nota : só pode ser usado por administradores de grupo e proprietário de bot\n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
uso : apenas envie o comando
nota : este comando pode ser usado se você for um administrador de grupo\n
comando : *${prefix}simih*
desc : ative o modo simi no grupo
uso : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
Nota : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
