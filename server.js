const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: process.env.BOT_TOKEN,

  prefix: "&"
});

bot.onMessage();
bot.onJoined();

const fs = require("fs");

let dir = fs.readdirSync("./commands");

let i = 0;

handler: while (i < dir.length) {
  const stat = fs.statSync("./commands/" + dir[i]);

  if (stat.isDirectory()) {
    const readdir = fs.readdirSync("./commands/" + dir[i]);

    let nums = 0;

    while (nums < readdir.length) {
      dir.push(dir[i] + "/" + readdir[nums]);

      nums++;
    }

    i++;

    continue handler;
  } else if (stat.isFile()) {
    const command = require("./commands/" + dir[i]);

    try {
      bot[Object.keys(command)[0]](command[Object.keys(command)[0]]);

      i++;

      continue handler;
    } catch (err) {
      console.error(err.message);

      delete dir[i];

      continue handler;
    }
  } else {
    console.error("Directory was not a Folder or File");

    delete dir[i];

    continue handler;
  }
}

bot.joinCommand({
  //command

  channel: "821686049839251466", //channel where it will log

  code: ` $giveRoles[$authorID;821720387066396672]

        $onlyIf[$isBot[$authorID]==true;]` //Message sent to <channel>
});

bot.joinCommand({
  channel: "822017499464859668",

  code: `
  $if[$isBot[$authorID]==false]
  $giveroles[$authorID;822068155357724672]
  $endif`
});

bot.command({
  name: "leaderboard",

  code: `$userLeaderboard[bal;desc;{top} - {username} - {value}]`
});
