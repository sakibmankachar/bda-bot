module.exports.command = {
  name: "restrict",

  code: `
$modifyChannelPerms[$findChannel[$authorID];-viewchannel;821720387066396672]

$modifyChannelPerms[$findChannel[$authorID];+viewchannel;$mentioned[1]]

Successfully only added <@$mentioned[1]> to your Private testing Channel!

$onlyIf[$mentioned[1]!=; Please Mention The bot!]

$onlyForChannels[$findChannel[$authorID];]

`
};
