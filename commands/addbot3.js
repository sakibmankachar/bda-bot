module.exports.command = {
  name: "addbot",

  code: `

    $reactionCollector[$splitText[1];everyone;2000m;✅,⛔;accept,decline;yes]

$textSplit[$sendMessage[{title: addbot} {description: $userTag wants to add a bot called $userTag[$findUser[$message[1]]] you can invite it by clicking [here\\](https://discord.com/oauth2/authorize?client_id=$getMessageVar[clinetid;$messageID]&scope=bot&permissions=0&guild_id=$guildID)} {color:RANDOM}

{field: Bot id: $message[1]:yes} {field:**Prefix:** $message[2]:yes} {field: User ID: $authorID:yes} {footer: WARNING! Do not delete Users message if it is the whole proccess is cancelled!};yes]; ]

$setMessageVar[userid;$authorID;$messageID]

$setMessageVar[clinetid;$message[1];$messageID]

$setMessageVar[prefixadd;$message[2];$messageID] 

$argsCheck[>2; :x: Make sure it has the ID and Prefix ex. \`&addbot $clientID &\`]

$onlyIf[$isBot[$findUser[$message[1]]]==true; :x: Please Put the ID of a Bot! ]

$onlyIf[$memberExists[$message[1]]!=true; **Hey**! This bot is already here! you can use it the testing channels.]]

$suppressErrors[An error Occurred. Please try again!]

$onlyForChannels[821636076921159692;Go to <#821636076921159692> to do this...]

`
};
