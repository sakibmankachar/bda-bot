module.exports.command = {
  name: "$alwaysExecute",

  code: `

$if[$getServerVar[q]==1]

1.Why You Want To become a Bot Reviewer?**Please Type Your Answer.**

$setServerVar[q;2]

$elseif[[$getServerVar[q]==2]

2.What you will do if a bot gives NSFW content in non-nsfw channel?**Please Type Your Answer.**

$setServerVar[q;3]

$endelseif

$elseif[[$getServerVar[q]==3]

3.What will you do if somebody submit a bot with a wrong prefix?**Please Type Your Answer.**

$setServerVar[q;4]

$endelseif

$elseif[[$getServerVar[q]==4]

What will you do if a bot has command like purge and nuke and anybody can use that Command?**Please Type Your answer.**

$setServerVar[q;5]

$endelseif

$elseif[[$getServerVar[q]==5]

What will you do if a bot has no help Command?**Please type your answer**

$setServerVar[q;m]

$endelseif

$elseif[[$getServerVar[q]==m]

$description[Please Wait For Nate (Yo-kai)#4756 (Nate) to give your Marks!]

$clear[100]

$endelseif

$endif

`
};
