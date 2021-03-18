module.exports.command = {
  name: "$alwaysExecute",

  code: `

$onlyForChannels[822070833681661963;]

$deleteCommand

$if[$getUserVar[custom]==off]

Successfully Created a Channel For You and your bot!

$sendDM[$authorID;Successfully Created a Channel for You!]

$createChannel[$authorID;text;821581152838090752]

$modifyChannelPerms[$findChannel[$authorID];+viewchannel;$authorID]

$modifyChannelPerms[$findChannel[$authorID];-viewchannel;822068155357724672]

$setUserVar[custom;on]

$elseif[$getUserVar[custom]==]

✔️ You already had your Private Testing Channel!

$deleteIn[5s]

$endelseif

$endif`
};
