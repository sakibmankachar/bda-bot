module.exports.command = {
  name: "ctc",
  nonPrefixed: true,
  code: `

$onlyforChannels[822070833681661963;]

$modifyChannelPerms[$findChannel[$authorID];-viewchannel;$guildID]

$modifyChannelPerms[$findChannel[$authorID];+viewchannel;821720387066396672]

$if[$getUserVar[custom]==False]

$newTicket[$authorID;

{title: Your Private Testing Channel!}

{description:**&delete** It will delete This channel!

**&restrict** The one bot you mentioned will able to talk in this channel!

**&add** The one bot you mentioned will be add in your Channel! 
(it's really thought to do this when you uses &restrict and then you can't see other bot and also you can mention then
Use this trick First copy the bot ID you want to add and return to this channel type this \`&add <@copiedbotid>\`
Just Replace the \`copiedbotid\` with the bot ID you copied!)}

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
