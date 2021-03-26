module.exports.command = {
  name: "addbot",

  Code: `

$title[New Bot Added]

$description[> User name: [$username[$authorID]#$discriminator[$authorID]]($authorAvatar?size=2048)

> User ID: \`$authorID\`

> Bot name: [$username[$noMentionMessage[1]]#$discriminator[$noMentionMessage[1]]]($userAvatar[$noMentionMessage[1]])

> Bot ID: \`$noMentionMessage[1]\`

> Prefix: \`$noMentionMessage[2]\`

> Invite Link

> [Click Here To Invite\\](https://discord.com/oauth2/authorize?client_id=$noMentionMessage[1]&scope=bot&permissions=0&guild_id=$guildID)]

$addTimestamp

$color[$random[1;999999]]

$onlyIf[$isNumber[$noMentionMessage[1]]!=false;That not a bot, please try again.]

$onlyIf[$isBot[$noMentionMessage[1]]!=false;That not a bot, please try again.]

$argsCheck[2;Usage: \`&addbot (BOT ID) (PREFIX)\`]

$suppressErrors[Usage: \`&addbot (BOT ID) (PREFIX)\`]

$channelSendMessage[821686049839251466;<@$authorID> Submitted a bot!]

$onlyForChannels[821636076921159692;Go in <#821636076921159692> to use this command!]`
};
