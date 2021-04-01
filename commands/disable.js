module.exports.command = {
  name: "disable",

  code: `
$modifyChannelPerms[$findChannel[$authorID];-viewchannel;$mentioned[1]]

Successfully disabled <@$mentioned[1]> to talk here!

$onlyIf[$mentioned[1]!=; Please Mention The bot!]

$onlyForChannels[$findChannel[$authorID];]
`
};
