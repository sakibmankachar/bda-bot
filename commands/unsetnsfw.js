module.exports.command = {
  name: "unsetnsfw",
  code: `
  <@$authorID>, Successfully unsetted this Testing Channel as non-NSFW channel!
$editChannel[$findChannel[$authorID];$default;$default;$default;no;$default;$default;yes]`
};
