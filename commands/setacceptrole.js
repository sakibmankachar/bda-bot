module.exports.command = {
  name: "setacceptrole",
  code: `
$addCmdReactions[✅]

$setServerVar[roleid;$mentionedRoles[1]]

$onlyIf[$mentionedRoles[1]!=;What role do you want set for give it]

$argsCheck[1;What role do you want set for give it]

$onlyBotPerms[manageroles;kick;Missing Permission, **Manage Roles, Kick** - BOT]

$onlyPerms[manageroles;Missing Permission, **Manage Roles** - USER]
`
};
