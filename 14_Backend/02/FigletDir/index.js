const figlet = require("figlet")

figlet("Priyanshu", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});

//  ____       _                       _
// |  _ \ _ __(_)_   _  __ _ _ __  ___| |__  _   _
// | |_) | '__| | | | |/ _` | '_ \/ __| '_ \| | | |
// |  __/| |  | | |_| | (_| | | | \__ \ | | | |_| |
// |_|   |_|  |_|\__, |\__,_|_| |_|___/_| |_|\__,_|
//               |___/


//package.json -> this json file contains descriptive and functional metadata about a project such as neme  version and dependecies
//npm init -->the npm inti command is use to create a packge.json file for your node.js project 