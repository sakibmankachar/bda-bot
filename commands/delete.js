module.exports.command = {
  name: "delete",

  code: `

$onlyForChannels[$authorID;]

$deleteChannels[$authorID;]

$sendDM[$authorID;You have Successfully Deleted your Channel!]

$setUserVar[custom;False]`
};
