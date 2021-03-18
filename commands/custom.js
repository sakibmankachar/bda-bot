module.exports = {

name: "$alwaysExecute",

code: `

$deleteCommand

$if[$getUserVar[custom]==off]

$sendDM[Successfully Created a Channel for You!]

$createChannel[$authorID;text;821722919054475284]

$modifyChannelPerms[$channelID;+viewchannel;$authorID]

$modifyChannelPerms[$channelID;-viewchannel;822068155357724672]

$setUserVar[custom;on]

$elseif[$getUserVar[custom]==on]

✔️ You already had your Private Testing Channel!

$deleteIn[5s]

$endif

$endelseif`

}