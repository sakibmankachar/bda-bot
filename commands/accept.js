module.exports.awaitedCommand = {
  name: "accept",

  code: `$changeNickname[$getMessageVar[clinetid;$messageID];$getMessageVar[prefixadd;$messageID] | $userName[$getMessageVar[clinetid;$messageID]]]

$sendDm[$getMessageVar[userid;$messageID]; Your bot has been Acepted in! ]

$channelSendMessage[821686049839251466;{title:New bot!} {description: $userTag[$getMessageVar[clinetid;$messageID]] has been acepted and added by a bot inviter!} {color:00ff00} <@$getMessageVar[clinetid;$messageID]>]

$editMessage[$message[1];{title: Bot accepted!}

{color: 00ff00} {description: a bot inviter has accepted this bot called $userTag[$findUser[$getMessageVar[clinetid;$messageID]]]}] 

$clearReactions[$channelID;$Message[1];all]

$onlyIf[$memberExists[$getMessageVar[clinetid;$messageID]]==true; Hey $userTag the bots **not Here** make sure you add it before trying to acept. Spaming this will lead in demote...] 

$onlyPerms[admin;manageserver;]

$suppressErrors[A extreme error just happened...]`
}; //This will respond when the user reacts
