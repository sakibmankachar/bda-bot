module.exports.command = {
  name: "restrict",

  code: `
  
  $argsCheck[>1;Pleas

$onlyForChannels[$findChannel[$authorID];]

$modifyChannelPerms[$findChannel[$authorID];-viewchannel;821720387066396672]

$modifyChannelPerms[$findChannel[$authorID];+viewchannel;$mentioned[1]]

Successfully only added <@$mentioned[1]> to your Private testing Channel!

$onlyIf[$mentioned[1]!=; Please Mention The bot!]

`
};
