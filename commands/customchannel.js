module.exports.command = {
  name: "$alwaysExecute",
  code: `
 
 $modifyChannelPerms[$findChannel[$authorID];+viewchannel;828551632392159232]
 
 $modifyChannelPerms[$findChannel[$authorID];+viewchannel;821720387066396672]
 
$modifyChannelPerms[$findChannel[$authorID];-viewchannel;$guildID]

$modifyChannelPerms[$findChannel[$authorID];+viewchannel;821719839802392607]

$if[$getUserVar[custom]==False]

$newTicket[$authorID; <@$authorID>

{title: Your Private Testing Channel!}

{description:**&close** To close This channel!

**&restrict** The one bot you mentioned will able to talk in this channel!

**&add** The one bot you mentioned will be add in your Channel! 
(it's really tough to do this when you uses &restrict and then you can't see other bot and also you can't mention then
Use this trick First copy the bot ID you want to add and return to this channel type this \`&add <@copiedbotid>\`
Just Replace the \`copiedbotid\` with the bot ID you copied!
Like this \`&add <@821687874382331904>\`)

**&setnsfw** To set this Channel as NSFW Channel!
(This is required if your bot has NSFW Commands and you want to use them!)

**&unsetnsfw** To set this Channel as Non-nsfw channel! (only works if you already make this channel as NSFW channel!)

**&disable** To disable a bot to talk in this Channel!}

{footer:More Commands will be added in the Future!}

{color:RANDOM}

;821722919054475284;no;Failed To create A Private Testing Channel!]

$setUserVar[custom;True]

$deleteCommand

$onlyForChannels[822070833681661963;]

$elseif[$getServerVar[custom]==False]

$description[❌You Already had a Private Testing Channel!]

$deleteIn[5s]

$deleteCommand

$onlyForChannels[822070833681661963;]

$endelseif

$else

$deleteCommand

$onlyForChannels[822070833681661963;]

$endif`
};
