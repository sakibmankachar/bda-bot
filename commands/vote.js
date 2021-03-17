module.exports.command = {
  name: "vote",

  code: `

$setUserVar[vote;$sum[$getUserVar[vote;$mentioned[1]];1];$mentioned[1]]

$title[Vote!]

$description[<@$authorID> Voted <@$mentioned[1]>]

$onlyIf[$isBot[$authorID]==false; The one you mentioned is not a bot. Please Mention a bot to vote!]
$argsCheck[<1;Please Mention A Bot to Vote]`
};
