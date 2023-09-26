const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");


function run() {

    const bucket = core.getInput("bucket", { required: true });
    const bucket_region = core.getInput("bucket-region", { required: true });
    const dist = core.getInput("dist-folder", { required: true });

    const s3uri = `s3://${bucket}`;

    exec.exec(`aws s3 sync ${dist} ${s3uri} --region ${bucket_region}`)

    core.notice("This is a message from my js custom action")
}

run();