const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");


function run() {

    const bucket = core.getInput("bucket", { required: true });
    const bucket_region = core.getInput("bucket-region", { required: true });
    const dist = core.getInput("dist-folder", { required: true });

    const s3uri = `s3://${bucket}`;

    exec.exec(`aws s3 sync ${dist} ${s3uri} --region ${bucket_region}`)

    const url = `http://${bucket}.s3-website-${bucket_region}.amazonaws.com`;

    core.setOutput("url-website", url);
}

run();