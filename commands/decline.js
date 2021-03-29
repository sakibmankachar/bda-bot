module.exports.awaitedCommand = {

name: "decline",

code: `$channelSendMessage[821686049839251466; <@$getMessageVar[userid]> {title: Declined!} {description: **$userTag[$getMessageVar[clinetid;$messageID]]** Has been **declined** by $userTag for one of the reasons below.

- A private bot

- testing

- an oath2 problem

- is not your bot

- has a verification problem like being verified} {color: FF0000}]

$sendDm[$getMessageVar[userid;$messageID]; Your bot has been declined!]

$editMessage[$message[1];{title: decline!}

{color: FF0000} {description: $usertag has declined this bot called $userTag[$getMessageVar[clinetid;$messageID]]

$clearReactions[$channelID;$Message[1];all]

please ask them to fix the bot! and try again! }]

$onlyPerms[admin;manageserver; ]  

$suppressErrors[A extreme error just happened...]`

} //This will respond when the user reacts