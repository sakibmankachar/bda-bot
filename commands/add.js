module.exports.command = {
  name: "add",
  code: `
  
$argsCheck[>1; Please Mention A bot!]

$onlyForChannels[$findChannel[$authorID];]

$modifyChannelPerms[$findChannel[$authorID];+viewchannel;$mentioned[1]]

Successfully added <@$mentioned[1]> to your Private Bot Testing Channel!

$onlyIf[$mentioned[1]!=;** Please Mention the bot in this way \`&add <@botid>\` ! For Example: \`&add <@821687874382331904>\`**]

`
};
