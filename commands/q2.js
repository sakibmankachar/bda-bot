module.exports.command = {
  name: "$alwaysExecute",

  code: `$if[[$getServerVar[q]==2]

2.What you will do if a bot gives NSFW content in non-nsfw channel?**Please Type Your Answer.**

$setServerVar[q;3]

$endif

`
};
