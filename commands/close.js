module.exports.command = {
  name: "close",

  code: `

$onlyForChannels[$findChannel[$authorID];]

$deleteChannels[$findChannel[$authorID];]

$sendDM[$authorID;You have Successfully closed your Channel!]

$setUserVar[custom;False]`
};
