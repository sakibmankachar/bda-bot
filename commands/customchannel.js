module.exports.command = {
  name: "$alwaysExecute",

  code: `

$onlyforChannels[822070833681661963;]

$if[$getUserVar[custom]==False]

$newTicket[$authorID;

{title: Your Private Testing Channel!}

{description:**&delete** It will delete This channel!}

{footer:More Commands will be added in the Future!}

{color:RANDOM}

;821722919054475284;no;Failed To create A Private Testing Channel!]

$setUserVar[custom;True]

$deleteCommand

$elseif[$getServerVar[custom]==False]

$description[❌You Already had a Private Testing Channel!

Your Private Testing Channel is <#$authorID>]

$deleteCommand

$endelseif

$endif`
};
