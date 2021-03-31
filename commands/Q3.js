module.exports.command = {
  name: "$alwaysExecute",

  code: `$if[[$getServerVar[q]==3]

3.What will you do if somebody submit a bot with a wrong prefix?**Please Type Your Answer.**

$setServerVar[q;4]

$endif

`
};
