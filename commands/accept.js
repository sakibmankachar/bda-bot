module.exports.command = {
  name: "accept",

  code: `

$author[$username[$findUser[$noMentionMessage]]#$discriminator[$findUser[$noMentionMessage]]]

$authorIcon[$userAvatar[$findUser[$noMentionMessage]]]

$title[✅ | Bot has been approved]

$addTimestamp

$color[$random[1;999999]]

$onlyIf[$findUser[$noMentionMessage]!=$authorID;Not found.]

$onlyIf[$userExists[$findUser[$noMentionMessage]]!=false;Not found.]

$onlyIf[$rolePosition[$highestRole[(your bot id)]]<$rolePosition[$getServerVar[roleid]];Access Forbidden.

> Role <@&$getServerVar[roleid]> was on the top than me.]

$onlyIf[$getServerVar[roleid]!=;Something just happened.]

$onlyIf[$isBot[$findUser[$noMentionMessage]]==true;That not a bot. please try again.]

$onlyBotPerms[manageroles; Missing Permission, **Manage Roles** - BOT]

$onlyPerms[manageroles;kick;Missing Permission, **Manage Roles, Kick** - USER]

$varExistError[roleid;Variable **roleid** not found.]

$argsCheck[>1;What bot is it want approved it]

$channelSendMessage[821686049839251466;{description:<@$findUser[$noMentionMessage]> Has Been Accepted And Added By A bot Reviewer}]

$giveRole[$findUser[$noMentionMessage];$getServerVar[roleid]]`
};
