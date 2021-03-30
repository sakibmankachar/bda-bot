module.exports.command = {
  name: "$alwaysExecute",

  code: `
  
$if[$message[1]==2]

$dm

$title[How can I make my bot private Channel?]

$description[You can Go <#822070833681661963> and type there anything to create a Private Bot Testing channel.

⚠️Note: This system is in beta. And might not work! Recommend to use <#821722990425276436> or <#821723042039201864> instead of a private testing channel.]

$footer[This system is in beta!]

$deleteCommand

$onlyForChannels[821636197402804244;]

$elseif[$message[1]==1]

$dm

$title[Where and How to Submit Bots!]

$description[Go in <#821636076921159692> and Type there \`&addbot <botid> <botprefix>\`.
Replace \`botid\` with your bot ID or Your bot Client ID.
Replace \`botprefix\` with your bot prefix.]

$deleteCommand

$onlyForChannels[821636197402804244;]

$endelseif

$else

$deleteCommand

$OnlyForChannels[821636197402804244;]

$endif
`
};
