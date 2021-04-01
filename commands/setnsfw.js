module.exports.command = {
  name: "setnsfw",
  code: `
  <@$authorID>, Successfully setted this testing channel as NSFW testing channel!
$editChannel[$findChannel[$authorID];$default;$default;$default;yes;$default;$default;no]
$onlyForChannels[$findChannel[$authorID];]`
};
