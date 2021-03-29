module.exports.command = {
  name: "restrict",

  code: `

$onlyForChannels[$findChannel[$authorID];]

$modifyChannelPerms[$findChannel[$authorID];-viewchannel;$guildID]

$modifyChannelPerms[$findChannel[$authorID];-viewchannel;$mentioned[1];$authorID]

Successfully only added <@$mentioned[1]> to your Private testing Channel!

`
};
