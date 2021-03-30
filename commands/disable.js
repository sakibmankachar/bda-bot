module.exports.command = {
  name: "disable",

  code: `

$OnlyForChannels[$findChannel[$authorID];]

$modifyChannelPerms[$findChannel[$authorID];-viewchannel;$mentioned[1]]

Successfully disabled <@$mentioned[1]> to talk here!

`
};
