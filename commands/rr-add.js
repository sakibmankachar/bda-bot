module.exports.command = {
  name: "reaction-role-add",

  aliases: ["rr-add"],

  code: `

$deletecommand

$deleteIn[2s]

 **I add <@&$getServerVar[rr2]>** Remmber if you add another reaction role this will canceled | **and** remember to do it again in 24D

$reactionCollector[$message[1];everyone;24d;$message[2];RR2;no]

 $setServerVar[rr2;$mentionedRoles[1]]

$argsCheck[3; **Worng Usage** | please use: \`$getServerVar[prefix]rr-add <messageID> <emoji> <@role>\`]

$suppressErrors[ **There is a problem** | make sure you wrote correctly: \`$getServerVar[prefix]rr-add <messageID> <emoji> <@role>\`

or check If I have enough Permissions to give this role or add reactions]

$onlyPerms[manageserver;**Let mods/admins to do that**]

`
};
