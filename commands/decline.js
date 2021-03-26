module.exports.command = {
  name: "decline",

  Code: `

$author[$username[$findUser[$noMentionMessage]]#$discriminator[$findUser[$noMentionMessage]]]

$authorIcon[$userAvatar[$findUser[$noMentionMessage]]]

$title[❌ | Bot has been declined]

$addTimestamp

$color[$random[1;999999]]

$onlyIf[$findUser[$noMentionMessage]!=$authorID;Not found.]

$onlyIf[$userExists[$findUser[$noMentionMessage]]!=false;Not found.]

$onlyIf[$isBot[$findUser[$noMentionMessage]]==true;That not a bot. please try again.]

$onlyBotPerms[kick;Missing Permission, **Kick** - BOT]

$onlyPerms[manageroles;kick;Missing Permission, **Manage Roles, Kick** - USER]

$argsCheck[>1;Which bot is it want declined it]

$channelSendMessage[821686049839251466;{description:<@$findUser[$noMentionMessage]> has been Declined for one of the reason from below:

Bot Has Oauth2 Problem.

Bot has reached 100 server without Verification.

Bot is Private.

Bot was offline in the testing time.

Bot has error in some commands

Bot doesn't have Help Command.

Bot's help Command has error and bugs

Bot reply without prefix.

Bot has only 1-3 commands.

Bot is in only 1-3 servers.

Etc....}]

$kick[$findUser[$noMentionMessage]]`
};
