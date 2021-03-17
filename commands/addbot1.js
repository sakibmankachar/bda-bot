module.exports.awaitedCommand = {
  name: "accept",

  code: `$changeNickname[$getMessageVar[clinetid;$messageID];$getMessageVar[prefixadd;$messageID] | $userName[$getMessageVar[clinetid;$messageID]]]

$sendDm[$getMessageVar[userid;$messageID]; Your bot has been Acepted in! ]

$channelSendMessage[logchannel;{title:New bot!} {description: $userTag[$getMessageVar[clinetid;$messageID]] has been acepted and added by a bot inviter!} {color:00ff00} <@$getMessageVar[clinetid;$messageID]>]

$editMessage[$message[1];{title: Bot accepted!}

{color: 00ff00} {description: A bot inviter has accepted this bot called **$userTag[$findUser[$getMessageVar[clinetid;$messageID]]]**}] 

$clearReactions[$channelID;$Message[1];all]

$onlyIf[$memberExists[$getMessageVar[clinetid;$messageID]]==true; Hey $userTag, Add that Bot Before Trying to accept the bot!] 

$onlyPerms[admin;manageserver;]

$suppressErrors[An Error occurred. Please try again!]`
};
