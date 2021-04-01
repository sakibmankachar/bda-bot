module.exports.command = {
  name: "clear",

  code: `
$clear[100]

$sendDM[$authorID;Sucessfully Removed 100 message from your Private Testing Channel!]

$onlyForChannels[$findChannel[$authorID];]`
};
