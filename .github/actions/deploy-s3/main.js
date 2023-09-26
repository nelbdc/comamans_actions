const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");


function run() {
    core.notice("This is a message from my js custom action")
}

run();