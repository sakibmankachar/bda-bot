module.exports.command = {
  name: "$alwaysExecute",

  code: `

$if[$getServerVar[q]==1]

1.Why You Want To become a Bot Reviewer?**Please Type Your Answer.**

$setServerVar[q;2]

$endif

`
};
